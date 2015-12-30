import React from "react";
import { connect } from 'react-redux'
import DevTools from './DevTools.jsx'

import DataTableBrowser from '../components/DataTableBrowser.jsx'

import NetworkViewer from "../components/NetworkViewer.jsx"
import NodeDestroyer from "../components/NodeDestroyer.jsx"

class Root extends React.Component {

  render() {
    const { dispatch, graph, ...props} = this.props

    return (
        <div>
          <NetworkViewer graph={graph} action={dispatch}/>
          <NodeDestroyer action={dispatch}/>
            <DataTableBrowser graph={graph} {...props}/>
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
