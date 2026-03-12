import { Graph, GraphNode, GraphEdge } from "@/lib/graph-algorithms"
import { randomRange } from "@/lib/math"

export class GraphEngine {

  graph: Graph

  constructor(graph: Graph) {
    this.graph = graph
  }

  initializePositions(width: number, height: number) {

    this.graph.nodes.forEach(node => {
      node.x = randomRange(-width / 2, width / 2)
      node.y = randomRange(-height / 2, height / 2)
      node.vx = 0
      node.vy = 0
    })

  }

  step() {

    const repulsion = 120
    const spring = 0.01
    const damping = 0.9

    const nodes = this.graph.nodes
    const edges = this.graph.edges

    for (let i = 0; i < nodes.length; i++) {

      const a = nodes[i]

      for (let j = i + 1; j < nodes.length; j++) {

        const b = nodes[j]

        const dx = b.x - a.x
        const dy = b.y - a.y

        const distSq = dx * dx + dy * dy + 0.01

        const force = repulsion / distSq

        a.vx -= force * dx
        a.vy -= force * dy

        b.vx += force * dx
        b.vy += force * dy
      }
    }

    edges.forEach(edge => {

      const a = nodes.find(n => n.id === edge.source)!
      const b = nodes.find(n => n.id === edge.target)!

      const dx = b.x - a.x
      const dy = b.y - a.y

      a.vx += dx * spring * edge.strength
      a.vy += dy * spring * edge.strength

      b.vx -= dx * spring * edge.strength
      b.vy -= dy * spring * edge.strength

    })

    nodes.forEach(node => {

      node.vx *= damping
      node.vy *= damping

      node.x += node.vx
      node.y += node.vy

    })
  }
}
