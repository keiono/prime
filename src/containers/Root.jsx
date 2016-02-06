import React from "react";
import { connect } from 'react-redux'
import DevTools from './DevTools.jsx'

import NetworkViewer from "../components/NetworkViewer.jsx"

class Root extends React.Component {

    render() {
        const { dispatch, graph, ...props} = this.props

        return (
            <div>
                <NetworkViewer graph={graph} action={dispatch}/>
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
