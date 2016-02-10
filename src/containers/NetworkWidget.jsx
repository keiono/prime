import React from "react";
import { connect } from 'react-redux';

import DevTools from './DevTools.jsx';
import CytoscapeRenderer from "../components/CytoscapeRenderer.jsx"
import { fetchNetwork, cyjsSelected } from "../state/actions/GraphAction.jsx"


class NetworkWidget extends React.Component {

  componentDidMount() {
    // Fetch Cytoscape.js JSON from remote resource.
    this.props.fetchNetwork(this.props.networkLocation);
  }

  render() {
    console.log("===========================")
    console.log(this.props)
    const {cyjsSelected, selected, graph, width, height, background, ...props} = this.props;

    const style = {
      width: width,
      height: height,
      background: background
    }

    return (
      <div>
        <DevTools />

        <CytoscapeRenderer
          graph={graph}
          style={style}
          selected={selected}
          cyjsSelected={cyjsSelected}
        />

      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    cyjsSelected: (selected) => dispatch(cyjsSelected(selected)),
    fetchNetwork: (networkLocation) => dispatch(fetchNetwork(networkLocation))
  }
}

function mapStateToProps(state) {

  console.log("888888 Style")
  console.log(state)
  return {
    graph: state.graph,
    style: state.style,
    selected: state.selected,
    graphUrl: state.graphUrl
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NetworkWidget)
