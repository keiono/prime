import {
  SELECT_NODE,
  RECEIVE_NETWORK,
  REQUEST_NETWORK
} from "../actions/Actions.jsx"

let EMPTY_GRAPH = {
  data: {},
  elements: {
    nodes: [],
    edges: []
  }
};

export default function graph(state = EMPTY_GRAPH, action) {

  console.log("############# Graph Reducer ################");
  console.log(action);
  console.log(state);
  console.log("############# Graph Reducer END ################");

  switch (action.type) {

    case REQUEST_NETWORK:
      console.log("!!!!!!!!!!ACT");
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_NETWORK:
      console.log("!!!!!!!!!!Got new net:");
      let newState = Object.assign({}, action.network);
      console.log(newState);
      console.log("!!!!!!!!!!!!!!!!!!!!!");

      return newState;

    default:
      console.log("!!!!!!!!!!DEF");
      return state;
  }
}
