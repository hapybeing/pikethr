export interface GraphNode {
  id: string
  label: string
  x: number
  y: number
  vx: number
  vy: number
  mass: number
}

export interface GraphEdge {
  source: string
  target: string
  strength: number
}

export interface Graph {
  nodes: GraphNode[]
  edges: GraphEdge[]
}

export function createGraph(): Graph {
  return {
    nodes: [],
    edges: []
  }
}

export function addNode(graph: Graph, node: GraphNode) {
  graph.nodes.push(node)
}

export function addEdge(graph: Graph, edge: GraphEdge) {
  graph.edges.push(edge)
}

export function findNode(graph: Graph, id: string) {
  return graph.nodes.find(n => n.id === id)
}
