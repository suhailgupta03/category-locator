const CategoryFinder = require('./category-finder');

let cfinder = new CategoryFinder();


const post = 'I like aircargoworld.com';

let time = Date.now();

console.log('Time taken (ms):',Date.now() - time);

for(let token of post.split(" ")) {
    console.log(cfinder.getImmediateCategory(token));
}


