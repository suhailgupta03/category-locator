const CategoryFinder = require('./category-finder');

let cfinder = new CategoryFinder();

let time = Date.now();
console.log(cfinder.getImmediateCategory("aircargoworld.com"));
console.log('Time taken (ms):',Date.now() - time);

