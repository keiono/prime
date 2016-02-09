import {
  SELECT_NODE,
  LOAD_NETWORK,
  RECEIVE_NETWORK,
  REQUEST_NETWORK
} from "./Actions.jsx"

import fetch from 'isomorphic-fetch';


export function loadNetwork(networkUrl) {
  return {
    type: LOAD_NETWORK,
    networkUrl
  }
}


export function selectNode(node) {
  return {
    type: SELECT_NODE,
    node
  }
}


function requestNetwork(networkUrl) {

  return {
    type: REQUEST_NETWORK,
    networkUrl
  }

}


function receiveNetwork(networkUrl, json) {

  console.log("****** receive");
  console.log(json);

  let result = {
    type: RECEIVE_NETWORK,
    networkUrl,
    network: json
  };

  console.log(result);

  return result;

}


export function fetchNetwork(networkUrl) {

  return function (dispatch) {

    dispatch(requestNetwork(networkUrl));

    return fetch(networkUrl)
      .then(response => response.json())
      .then(json => dispatch(receiveNetwork(networkUrl, json)));
  }
}

