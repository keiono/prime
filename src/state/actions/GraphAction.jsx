import { ADD_NODE, REMOVE_NODE, ADD_EDGE, REMOVE_EDGE } from "./Actions.jsx"


export function addNode(node) {
  return {
    type: ADD_NODE,
    node
  }
}

export function removeNode(node) {
  return {
    type: REMOVE_NODE,
    node
  }
}

export function addEdge(edge) {
  return {
    type: ADD_EDGE,
    edge
  }
}

export function removeEdge(edge) {
  return {
    type: REMOVE_EDGE,
    edge
  }
}
