import { ADD_NODE, REMOVE_NODE, ADD_EDGE, REMOVE_EDGE, SELECT_NODE } from "./Actions.jsx"


export function addNode(node) {
  return {
    type: ADD_NODE,
    node
  }
}

export function removeNode(node_id) {
  return {
    type: REMOVE_NODE,
    id: node_id
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

export function selectNode(node) {
  return {
    type: SELECT_NODE,
    node
  }
}
