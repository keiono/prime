import React from "react";
import { connect } from 'react-redux'
import DevTools from './DevTools.jsx'

import NetworkViewer from "../components/NetworkViewer.jsx"
import NodeDestroyer from "../components/NodeDestroyer.jsx"

class Root extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { dispatch, graph } = this.props
    return (
        <div>
          <NetworkViewer graph={graph} action={dispatch}/>
          <NodeDestroyer graph={graph} action={dispatch}/>
          <DevTools/>
        </div>
    )
  }

}

function select(state) {
  return {
    graph: state.graph
  }
}

export default connect(select)(Root)
