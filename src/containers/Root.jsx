import React from "react";
import { connect } from 'react-redux';

import DevTools from './DevTools.jsx';
import NetworkViewer from "../components/NetworkViewer.jsx"
import { fetchNetwork } from "../state/actions/GraphAction.jsx"


class Root extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchNetwork("./cyjs-with-style.json"));
  }

  render() {
    console.log('-----------PROP------------');
    console.log(this.props);

    const { dispatch, graph, style, ...props} = this.props;

    return (
      <div>
        <DevTools />
        <NetworkViewer graph={graph} style={style} action={dispatch}/>
      </div>
    )
  }

}


function select(state) {

  return {
    graph: state.graph,
    style: state.style
  }

}

export default connect(select)(Root)
