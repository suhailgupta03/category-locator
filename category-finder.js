module.exports = class CategoryFinder {

    /**
     * Inits the word category graph by the global
     * graph
     * @param {*} graph 
     */
    constructor(graph) {
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