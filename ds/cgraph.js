var Graph = require("graphlib").Graph;

module.exports = class CGraph {

    constructor(directed = true, multigraph = false, compound = false) {
        this.graph = new Graph({
            directed: directed,
            multigraph: multigraph,
            compound: compound
        });
    }

    /**
     * Adds a node to a graph
     * Takes O(1) time
     * @param {any} nodeId 
     * @param {any} nodeLabel 
     */
    addNode(nodeId, nodeLabel) {
        if (!nodeId)
            throw new Error('Cannot insert a node with ID undefined');

        if (nodeLabel)
            this.graph.setNode(nodeId, nodeLabel);
        else
            this.graph.setNode(nodeId);
    }

    /**
     * Remove the node with the id v in the graph or do nothing if the node is 
     * not in the graph. If the node was removed this function also removes 
     * any incident edges. Returns the graph, allowing this to be chained with 
     * other functions. 
     * Takes O(|E|) time.
     * @param {*} nodeId 
     */
    removeNode(nodeId) {
        return this.graph.removeNode(nodeId);
    }

    /**
     * Returns true if the graph has a node with the id v. Takes O(1) time.
     * @param {any} nodeId 
     */
    hasNode(nodeId) {
        return this.graph.hasNode(nodeId);
    }

    /**
     * Takes O(1) time
     * @param {any} nodeId 
     */
    getNodeLabel(nodeId) {
        return this.graph.node(nodeId);
    }

    /**
     * Returns the ids of the nodes in the graph. 
     * Use getNodeLabel(v) to get the label for each node. 
     * Takes O(|V|) time.
     */
    getAllNodes() {
        return this.graph.nodes();
    }

    /**
     * Returns those nodes in the graph that have no in-edges. 
     * Takes O(|V|) time.
     */
    getSources() {
        return this.graph.sources();
    }

    /**
     * Return all edges that point to the node 'toNode'. Optionally filters those edges down
     * to just those coming from node 'fromNode'. Behavior is undefined for undirected graphs -
     * use nodeEdges instead. Returns undefined if node 'toNode' is not in the graph. 
     * Takes O(|E|) time.
     * @param {*} toNode 
     * @param {*} fromNode 
     */
    getInEdges(toNode, fromNode) {
        if (toNode && fromNode)
            return this.graph.inEdges(toNode, fromNode);
        else
            return this.graph.inEdges(toNode);
    }

    /**
     * Return all edges that are pointed at by node v. Optionally filters those 
     * edges down to just those point to w. Behavior is undefined for undirected 
     * graphs - use nodeEdges instead. Returns undefined if node v is not in the 
     * graph. 
     * Takes O(|E|) time.
     * @param {*} toNode 
     * @param {*} fromNode 
     */
    getOutEdges(v, w) {
        if (v && w)
            return this.graph.outEdges(v, w);
        else
            return this.graph.outEdges(v);
    }

    /**
     * Returns all edges to or from node v regardless of direction. Optionally filters 
     * those edges down to just those between nodes v and w regardless of direction. 
     * Returns undefined if node v is not in the graph. 
     * Takes O(|E|) time.
     * @param {*} v 
     * @param {*} w 
     */
    getNodeEdges(v, w) {
        if (v && w)
            return this.graph.nodeEdges(v, w);
        else
            return this.graph.nodeEdges(v);
    }

    /**
     * Returns true if the graph has an edge between v and w with the optional name. 
     * The name parameter is only useful with multigraphs. v and w can be interchanged
     * for undirected graphs. 
     * Takes O(1) time.
     */
    hasEdge(v, w, name) {
        if (name)
            return this.graph.hasEdge(v, w, name);
        else
            return this.graph(v, w);
    }

    /**
     * Creates or updates the label for the edge (v, w) with the optionally supplied name. 
     * If label is supplied it is set as the value for the edge. If label is not
     * supplied and the edge was created by this call then the default edge label 
     * will be assigned. The name parameter is only useful with multigraphs. 
     * Returns the graph, allowing this to be chained with other functions. 
     * Takes O(1) time.
     */
    setEdge(v, w, label, name) {
        if (label && name)
            return this.graph.setEdge(v, w, label, name);
        else if (label && !name)
            return this.graph.setEdge(v, w, label);
        else if (!label && name)
            return this.graph.setEdge(v, w, undefined, name);
        else
            return this.graph.setEdge(v, w);
    }

    /**
     * Removes the edge (v, w) if the graph has an edge between v and w with the 
     * optional name. If not this function does nothing. The name parameter is only 
     * useful with multigraphs. v and w can be interchanged for undirected graphs.
     * Takes O(1) time.
     * @param {*} v 
     * @param {*} w 
     */
    removeEdge(v, w) {
        return this.graph.removeEdge(v, w);
    }

}