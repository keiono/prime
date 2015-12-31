import { ADD_NODE, REMOVE_NODE, ADD_EDGE, REMOVE_EDGE, SELECT_NODE } from "../actions/Actions.jsx"

const initialGraph = [
    { // node n1
      group: 'nodes', // 'nodes' for a node, 'edges' for an edge
      // NB the group field can be automatically inferred for you

      // NB: id fields must be strings or numbers
      data: { // element data (put dev data here)
        id: 'n1', // mandatory for each element, assigned automatically on undefined
        parent: 'nparent', // indicates the compound node parent id; not defined => no parent
      },

      // scratchpad data (usually temp or nonserialisable data)
      scratch: {
        foo: 'bar'
      },

      position: { // the model position of the node (optional on init, mandatory after)
        x: 100,
        y: 100
      },

      selected: false, // whether the element is selected (default false)

      selectable: true, // whether the selection state is mutable (default true)

      locked: false, // when locked a node's position is immutable (default false)

      grabbable: true, // whether the node can be grabbed and moved by the user

      classes: 'foo bar' // a space separated list of class names that the element has
    },

    { // node n2
      data: { id: 'n2' },
      renderedPosition: { x: 200, y: 200 } // can alternatively specify position in rendered on-screen pixels
    },

    { // node n3
      data: { id: 'n3', parent: 'nparent' },
      position: { x: 123, y: 234 }
    },

    { // node nparent
      data: { id: 'nparent', position: { x: 200, y: 100 } }
    },

    { // edge e1
      data: {
        id: 'e1',
        // inferred as an edge because `source` and `target` are specified:
        source: 'n1', // the source node id (edge comes from this node)
        target: 'n2'  // the target node id (edge goes to this node)
      }
    }
  ]

export default function graph(state = initialGraph, action) {
  switch (action.type) {
    case REMOVE_NODE:
      var newState = state.filter((e) => {
        return e.data.id != action.id
      })
      return newState
      case SELECT_NODE:
          return state
    default:
      return state
  }
}
