const CategoryFinder = require('./category-finder');
const URL = require('url');

let cfinder = new CategoryFinder();

const rdata = {"_index":"citibank_cas_a","_type":"data","_id":"c615b3fc6c7e2318b3a12782b7014b6b43303f7a","_version":2,"found":true,"_source":{"yymmddhh":"2017-07-21-12","iid":"e0f6cb70-6e0d-11e7-a58d-37955fcb980c","block_source":null,"conversations":null,"countries":{"my":{"full_name":"Malaysia","id":"6cb67ee0-a789-11e4-a34f-74867a1157ba","short_name":"my"},"sg":{"full_name":"Singapore","id":"6cb66671-a789-11e4-a34f-74867a1157ba","short_name":"sg"}},"countries_source":{"own":["my","sg"]},"country_ids":["6cb66671-a789-11e4-a34f-74867a1157ba","6cb67ee0-a789-11e4-a34f-74867a1157ba"],"created_date":"2017-07-21T12:12:34.599Z","data_type":["news"],"es_ids":null,"file_name":"1500629055957_news_13270.json","handlers":["https://www.google.co.in/alerts/feeds/18108835726464155339/4369492784142745259"],"handlers_name":null,"impact":1499,"industries":["Banking Brands"],"is_deleted":{"is_deleted":0,"deleted_date":null,"deleted_by":null},"is_modified":{"is_modified":0,"modified_date":null,"modified_by":null},"is_visible":null,"language_ids":["6cda7843-a789-11e4-a34f-74867a1157ba"],"languages":{"en":{"full_name":"English","id":"6cda7843-a789-11e4-a34f-74867a1157ba","short_name":"en","source":"7"}},"languages_source":{"own":["en"]},"master_created_date":null,"master_iid":null,"master_yymmddhh":null,"matched_reference_ids":{"pic":["10066","12607","12855","13049","13085","16119","16158","16206","18416","21043","21044","21100"]},"other_details":null,"parent_post":{"id":null,"published_date":null,"content":null,"url":null,"author_name":null,"author_username":null,"author_pic_url":null,"engagement_comment_count":null,"engagement_like_count":null,"engagement_rank":null,"engagement_share_count":null},"peak_velocity":null,"platform_ids":["6ce32911-a789-11e4-a34f-74867a1157ba"],"platforms":{"news":{"full_name":"News","id":"6ce32911-a789-11e4-a34f-74867a1157ba","short_name":"news"}},"post":{"id":"ae51679a6d30abd35a5ae8cf27ff46df","published_date":"2017-07-20T10:30:00.000Z","content":"&quot;The net profit attributable to unit-holders is at 22.6% of our full-year forecast,&quot; OCBC Investment Research said in a note, adding that the earnings&nbsp;...","title":"Singapore stocks snap five-day winning streak, Malaysia shares edge lower","url":"http://asia.nikkei.com/Markets/Equities/Singapore-stocks-snap-five-day-winning-streak-Malaysia-shares-edge-lower","short_description":null,"post_tags":null,"post_type":0,"media":{"type":"TEXT","title":null,"name":null,"url":null,"dimension_x":null,"dimension_y":null,"mime_type":null,"size":null,"server":null,"folder":null,"other_details":null},"engagement":{"comment_count":0,"like_count":0,"rank":0,"share_count":0},"publication":null,"other_details":null,"alexa_rank":667,"moz_rank":null,"parent_id":null,"child_posts_count":null,"hashtags":null,"mentions":null,"lat_long":null,"parent_post":null,"content_urls":null,"address":{"country":null,"country_code":null,"locality":null,"region":null,"sub_region":null,"display_name":null,"pin_code":null,"name":null,"address_source":null,"coordinates":null,"address":null,"distance":null},"geo":{"country":null,"country_code":null,"locality":null,"region":null,"sub_region":null,"display_name":null,"pin_code":null,"name":null,"address_source":null,"coordinates":null,"address":null,"distance":null},"location":{"country":null,"country_code":null,"locality":null,"region":null,"sub_region":null,"display_name":null,"pin_code":null,"name":null,"address_source":null,"coordinates":null,"address":null,"distance":null},"content_terms":["&quotthe net profit attributable","226%","earnings&nbsp","forecast&quot","full-year","investment","note adding","ocbc","research","unit-holders"],"original_url":"https://www.google.com/url?rct=j&sa=t&url=http://asia.nikkei.com/Markets/Equities/Singapore-stocks-snap-five-day-winning-streak-Malaysia-shares-edge-lower&ct=ga&cd=CAIyHDkxMWFiNjQ0MGUyMzUzMmU6Y28uaW46ZW46SU4&usg=AFQjCNE7Z18CBR_E6k7e8t434jhK0x_7AQ","tokenized_content":"&quot;The net profit attributable to unit-holders is at 22.6% of our full-year forecast,&quot; OCBC Investment Research said in a note, adding that the earnings&nbsp;...","tokenized_title":"Singapore stocks snap five-day winning streak, Malaysia shares edge lower","custom_field":null,"user_mentions":null,"published_date_year":2017,"published_date_month":7,"published_date_day":20,"published_date_time":1500546600,"published_date_midnight_time":1500508800},"post_author":{"name":"","username":null,"gender":"UNKNOWN","klout_score":null,"age_range":null,"location":null,"type":null,"media":{"type":"TEXT","title":null,"name":null,"url":null,"dimension_x":null,"dimension_y":null,"mime_type":null,"size":null,"server":null,"folder":null,"other_details":null},"gender_score":null,"gender_source":1,"followers":0,"following":0,"likes":0,"tweets":0,"user_id":null,"post_count":null,"lat_long":null,"address":{"country":null,"country_code":null,"locality":null,"region":null,"sub_region":null,"display_name":null,"pin_code":null,"name":null,"address_source":null,"coordinates":null,"address":null,"distance":null},"is_verified":null,"profile_url":null},"publications":["NIKKEI"],"reference_ids":["13270"],"remarks":"New Processed Record","rule_tags":null,"sections":[3],"sentiments":{"sentiment":"POSITIVE","score":1.3333333730697632,"source":2},"source_type":[0],"spam":{"is_spam":0,"score":0,"description":null},"system_info":null,"tags":["Banking Brands","NIKKEI"],"tcd_id":null,"tcd_serial_no":null,"themes":null,"velocity_data":null,"company_identifier":"citibank","record_inserted_at":"2017-07-21T13:32:19.934Z"}}
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
		if(cobj.tags)
			post = cobj.tags;
		post.push(cobj.author);
	break;

	default:
		let purl = URL.parse(cobj.url);
		post.push(purl.hostname.replace("www.","").toLowerCase());
		post.push(purl.pathname);
		post = [...post, ...purl.pathname.split('/')];

		if(Array.isArray(cobj.tags))
			post = [...post, ...cobj.tags];

		post = post.filter(Boolean);
	break;
}

let time = Date.now();

for(let token of post) {
	if(token.match(/\s+[\w]/g))
		post.push(token.split(" ").join(""));
	let icat = cfinder.getImmediateCategory(token.toLowerCase());
	if(Array.isArray(icat))
   		catg = [...catg, ...icat];
   	else
   		console.log(icat)
}

let cat = new Set();

catg.map((o) => cat.add(o.w));

console.log('Category list ===',Array.from(cat));
console.log('Time taken (ms):',Date.now() - time);