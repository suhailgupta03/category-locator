const CategoryFinder = require('./category-finder');
const URL = require('url');
const elasticsearch = require('elasticsearch');

const CGraph = require('./ds/cgraph');
let obj = require('./dump.json');

let cgraph = new CGraph(true); // Makes a directed graph

for (let info of obj.data) {
    let category = info.tag_name;
    let keywords = info.keywords
        .replace(/^\[/, '')
        .replace(/\]$/, '')
        .split(',');

    for (let word of keywords) {
        cgraph.setEdge(word.trim(), category);
        let lindex = word.lastIndexOf('/');
        if ((lindex != -1) && (word.length - 1 != lindex)) {
            cgraph.setEdge(word.substring(lindex + 1, word.length), category);
        }
    }
}

let cfinder = new CategoryFinder(cgraph);


let client = new elasticsearch.Client({
    host: 'http://10.117.240.251:9200'
});


var body = {
  "query": {
    "bool": {
      "filter": [
        {
          "query_string": {
            "default_field": "platform_ids",
            "query": "\"27530fd3-fa3e-11e5-83d2-0656fc34e8c9\""
          }
        },
        {
          "range": {
            "created_date": {
              "from": "2014-04-09T00:00:00",
              "to": "2018-04-16T23:59:59"
            }
          }
        }
      ],
      "must_not": [
        {
          "exists": {
            "field": "publications"
          }
        },
        {
          "query_string": {
            "default_field": "remarks",
            "query": "\"publications updated\""
          }
        }
      ]
    }
  }
}



const condition = {
    index: 'citibank_cas',
    type: 'data',
    body: body,
    scroll: '5m',
    size: 50
}

function processRecords() {

    client.search(condition)
        .then(r => {


            let bulkQueries = [];

            for (let row of r.hits.hits) {

                esRow_data = {}
                esRow_data.doc = {}

                esRow_data.doc.publications = getPublication(row);
                esRow_data.doc.remarks = 'publications updated';

                // esRow_data.doc.publications = ['aaaa']

                bulkQueries.push({ "update": { "_index": row._index, "_type": "data", "_id": row._id } });
                bulkQueries.push(esRow_data);
            }



            //console.log(JSON.stringify(bulkQueries, null, 2))
            
            client.bulk({
                body: bulkQueries
            }, function (err, result) {


                if (err) console.log(err);

                console.log('1 batch is updated')

                processRecords();

            });



        })
        .catch(e => {
            console.log(e);
        })

}



function getPublication(rdata = {}) {

    let cobj = {};

    cobj.platform = rdata._source.platforms;
    cobj.handlers = rdata._source.handlers;
    cobj.author = rdata._source.post_author.name;
    cobj.url = rdata._source.post.url;
    cobj.hashtags = rdata._source.post.hashtags;
    cobj.tags = rdata._source.tags;

    //console.log(cobj);

    let platform = Object.keys(cobj.platform)[0].toLowerCase();

    let post = [];
    let catg = [];

    switch (platform) {
        case 'instagram':
        case 'youtube':
            post = cobj.handlers;
            cobj.url = cobj.url.replace(/\/$/, '');
            post.push(cobj.url.match(/[^\/#]+(?=#|$)/)[0]);
            break;

        case 'factivanews':
            if (cobj.tags)
                post = cobj.tags;
            post.push(cobj.author);
            break;

        default:
            let purl = URL.parse(cobj.url);
            post.push(purl.hostname.replace("www.", "").toLowerCase());
            post.push(purl.pathname);
            post = [...post, ...purl.pathname.split('/')];

            if (Array.isArray(cobj.tags))
                post = [...post, ...cobj.tags];

            post = post.filter(Boolean);
            break;
    }

    let time = Date.now();

    for (let token of post) {
        if (token.match(/\s+[\w]/g))
            post.push(token.split(" ").join(""));
        let icat = cfinder.getImmediateCategory(token.toLowerCase());
        if (Array.isArray(icat))
            catg = [...catg, ...icat];
        else
            console.log(icat)
    }

    let cat = new Set();

    catg.map((o) => cat.add(o.w));

    console.log('Category list ===', Array.from(cat));
    console.log('Time taken (ms):', Date.now() - time);
    return  Array.from(cat);
}

processRecords();
