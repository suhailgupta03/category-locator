const CategoryFinder = require('./category-finder');
const URL = require('url');

let cfinder = new CategoryFinder();

const rdata = {
  "_index": "dbsbank_cas_a",
  "_type": "data",
  "_id": "d37dacefb8e49f3bae5966159e561a9d9481c91d",
  "_version": 1,
  "found": true,
  "_source": {
    "yymmddhh": "2017-07-22-23",
    "iid": "2390e390-6f34-11e7-8047-95e0d805e194",
    "block_source": null,
    "conversations": null,
    "countries": {
      "sg": {
        "full_name": "Singapore",
        "id": "6cb66671-a789-11e4-a34f-74867a1157ba",
        "short_name": "sg"
      }
    },
    "countries_source": {
      "configured": [
        "sg"
      ],
      "own": [
        "sg"
      ]
    },
    "country_ids": [
      "6cb66671-a789-11e4-a34f-74867a1157ba"
    ],
    "created_date": "2017-07-22T23:18:58.377Z",
    "data_type": [
      "news"
    ],
    "es_ids": null,
    "file_name": "1500749906567_news_13191.json",
    "handlers": [
      "https://www.google.co.in/alerts/feeds/18108835726464155339/18315231970821113811"
    ],
    "handlers_name": null,
    "impact": 129,
    "industries": [
      "Banking Brands"
    ],
    "is_deleted": {
      "is_deleted": 0,
      "deleted_date": null,
      "deleted_by": null
    },
    "is_modified": {
      "is_modified": 0,
      "modified_date": null,
      "modified_by": null
    },
    "is_visible": null,
    "language_ids": [
      "6cda7843-a789-11e4-a34f-74867a1157ba"
    ],
    "languages": {
      "en": {
        "full_name": "English",
        "id": "6cda7843-a789-11e4-a34f-74867a1157ba",
        "short_name": "en",
        "source": 7
      }
    },
    "languages_source": {
      "own": [
        "en"
      ]
    },
    "master_created_date": null,
    "master_iid": null,
    "master_yymmddhh": null,
    "matched_reference_ids": {
      "pic": [
        10065,
        12934,
        13083,
        13097,
        13153,
        13158,
        13499,
        16097,
        16098,
        16117,
        16139,
        16153,
        16858,
        16910,
        16928,
        16999,
        17015,
        18409,
        18414,
        18420,
        21032,
        21063,
        21102
      ]
    },
    "other_details": null,
    "parent_post": {
      "id": null,
      "published_date": null,
      "content": null,
      "url": null,
      "author_name": null,
      "author_username": null,
      "author_pic_url": null,
      "engagement_comment_count": null,
      "engagement_like_count": null,
      "engagement_rank": null,
      "engagement_share_count": null
    },
    "peak_velocity": null,
    "platform_ids": [
      "6ce32911-a789-11e4-a34f-74867a1157ba"
    ],
    "platforms": {
      "news": {
        "full_name": "News",
        "id": "6ce32911-a789-11e4-a34f-74867a1157ba",
        "short_name": "news"
      }
    },
    "post": {
      "id": "f4b5a146bd2223373cbd071b775d6217",
      "published_date": "2017-07-22T09:45:00.000Z",
      "content": "NYFA is a film-making competition organised by *SCAPE and co-presented by the National Youth Council (NYC) and DBS Bank, which aims to&nbsp;...",
      "title": "Changi, a short film about immigration, wins top prize at 2017 National Youth Film Awards",
      "url": "http://www.channelnewsasia.com/news/singapore/changi-a-short-film-about-immigration-wins-top-prize-at-2017-9054774",
      "short_description": null,
      "post_tags": null,
      "post_type": 0,
      "media": {
        "type": "TEXT",
        "title": null,
        "name": null,
        "url": null,
        "dimension_x": null,
        "dimension_y": null,
        "mime_type": null,
        "size": null,
        "server": null,
        "folder": null,
        "other_details": null
      },
      "engagement": {
        "comment_count": 0,
        "like_count": 0,
        "rank": 0,
        "share_count": 0
      },
      "publication": null,
      "other_details": null,
      "alexa_rank": 7775,
      "moz_rank": null,
      "parent_id": null,
      "child_posts_count": null,
      "hashtags": null,
      "mentions": null,
      "lat_long": null,
      "parent_post": null,
      "content_urls": null,
      "address": {
        "country": null,
        "country_code": null,
        "locality": null,
        "region": null,
        "sub_region": null,
        "display_name": null,
        "pin_code": null,
        "name": null,
        "address_source": null,
        "coordinates": null,
        "address": null,
        "distance": null
      },
      "geo": {
        "country": null,
        "country_code": null,
        "locality": null,
        "region": null,
        "sub_region": null,
        "display_name": null,
        "pin_code": null,
        "name": null,
        "address_source": null,
        "coordinates": null,
        "address": null,
        "distance": null
      },
      "location": {
        "country": null,
        "country_code": null,
        "locality": null,
        "region": null,
        "sub_region": null,
        "display_name": null,
        "pin_code": null,
        "name": null,
        "address_source": null,
        "coordinates": null,
        "address": null,
        "distance": null
      },
      "content_terms": [
        "*scape",
        "aims to&nbsp",
        "co-presented",
        "dbs bank",
        "film-making competition organised",
        "national youth council nyc",
        "nyfa"
      ],
      "original_url": "https://www.google.com/url?rct=j&sa=t&url=http://www.channelnewsasia.com/news/singapore/changi-a-short-film-about-immigration-wins-top-prize-at-2017-9054774&ct=ga&cd=CAIyHjFhMWNkYzQzZGRjNDg5M2I6Y28uaW46ZW46U0c6Ug&usg=AFQjCNHkAeesIdrr3HeIL0rWGZroz4TQfA",
      "tokenized_content": "NYFA is a film-making competition organised by *SCAPE and co-presented by the National Youth Council (NYC) and DBS Bank, which aims to&nbsp;...",
      "tokenized_title": "Changi, a short film about immigration, wins top prize at 2017 National Youth Film Awards",
      "custom_field": null,
      "user_mentions": null,
      "published_date_year": 2017,
      "published_date_month": 7,
      "published_date_day": 22,
      "published_date_time": 1500716700,
      "published_date_midnight_time": 1500681600
    },
    "post_author": {
      "name": "",
      "username": null,
      "gender": "UNKNOWN",
      "klout_score": null,
      "age_range": null,
      "location": null,
      "type": null,
      "media": {
        "type": "TEXT",
        "title": null,
        "name": null,
        "url": null,
        "dimension_x": null,
        "dimension_y": null,
        "mime_type": null,
        "size": null,
        "server": null,
        "folder": null,
        "other_details": null
      },
      "gender_score": null,
      "gender_source": 1,
      "followers": 0,
      "following": 0,
      "likes": 0,
      "tweets": 0,
      "user_id": null,
      "post_count": null,
      "lat_long": null,
      "address": {
        "country": null,
        "country_code": null,
        "locality": null,
        "region": null,
        "sub_region": null,
        "display_name": null,
        "pin_code": null,
        "name": null,
        "address_source": null,
        "coordinates": null,
        "address": null,
        "distance": null
      },
      "is_verified": null,
      "profile_url": null
    },
    "publications": [
      "Channel News",
      "Channel News Asia"
    ],
    "reference_ids": [
      13191
    ],
    "remarks": "New Processed Record",
    "rule_tags": null,
    "sections": [
      3
    ],
    "sentiments": {
      "sentiment": "POSITIVE",
      "score": 1.3333333730697632,
      "source": 2
    },
    "source_type": [
      0
    ],
    "spam": {
      "is_spam": 0,
      "score": 0,
      "description": null
    },
    "system_info": null,
    "tags": [
      "Banking Brands",
      "Channel News",
      "Channel News Asia"
    ],
    "tcd_id": null,
    "tcd_serial_no": null,
    "themes": null,
    "velocity_data": null,
    "company_identifier": "dbsbank",
    "record_inserted_at": "2017-07-22T23:19:02.441Z"
  }
}

// Start populating the computation object
let cobj = {};

cobj.platform = rdata._source.platforms;
cobj.handlers = rdata._source.handlers;
cobj.author = rdata._source.post_author.name;
cobj.url = rdata._source.post.url;
cobj.hashtags = rdata._source.post.hashtags;
cobj.tags = rdata._source.tags;

console.log(cobj);

let platform = Object.keys(cobj.platform)[0].toLowerCase();

let post = [];
let catg = [];

switch(platform) {
	case 'instagram': 
	case 'youtube':
		post = cobj.handlers;
		cobj.url = cobj.url.replace(/\/$/,'');
		post.push(cobj.url.match(/[^\/#]+(?=#|$)/)[0]);
	break;

	case 'factivanews':
		post = cobj.tags;
		post.push(cobj.author);
	break;

	default:
		let purl = URL.parse(cobj.url);
		post.push(purl.hostname);
		post.push(purl.pathname);
		post = [...post, ...purl.pathname.split('/')];
		if(Array.isArray(cobj.tags))
			post = [...post, ...cobj.tags];
		post = post.filter(Boolean);
	break;
}



let time = Date.now();

for(let token of post) {
	if(token.match(/[\w]+\s+[\w]+/))
		post.push(token.split(" ").join(""));
	let icat = cfinder.getImmediateCategory(token);
	if(Array.isArray(icat))
   		catg = [...catg, ...icat];
   	else
   		console.log(icat)
}

let cat = [];

catg.map((o) => cat.push(o.w));

console.log('Category list ===',cat);
console.log('Time taken (ms):',Date.now() - time);