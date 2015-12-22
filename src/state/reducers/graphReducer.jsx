export default function graph(state = [], action) {
  switch (action.type) {
    case 'ADD_NODE':
      return state.concat([action.node])
    default:
      return state
  }
}
