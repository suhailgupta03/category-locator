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
        if((lindex != -1) && (word.length-1 != lindex)) {
            cgraph.setEdge(word.substring(lindex+1, word.length), category);
        }
    }
}

global._word_category_graph = cgraph;

module.exports = class CategoryFinder {

    /**
     * Inits the word category graph by the global
     * graph
     * @param {*} graph 
     */
    constructor(graph = _word_category_graph) {
        this.wcgraph = graph;
    }

    /**
     * For an item passed, returns a list of immediately linked
     * words
     * @return {Array}
     */
    getImmediateCategory(item) {
       
        if (this.wcgraph.hasNode(item)) {
            // Check which edges enter and leave node 'item'
            return this.wcgraph.getOutEdges(item);
        } else {
            return `'${item}' (Node) does not exist`;
        }
    }

}