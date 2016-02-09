import React from "react"
import cytoscape from "cytoscape"
import {GraphAction} from '../state/actions/GraphAction.jsx'

const DEF_STYLE = [
  {
    "selector": "node",
    "css": {
      "background-color": "red",
      "background-opacity": 255,
      "border-opacity": 255,
      "border-width": 0,
      "color": "#333333",
      "font-family": "HelveticaNeue-UltraLight",
      "font-size": 12,
      "height": 30,
      "shape": "roundrectangle",
      "text-opacity": 255,
      "width": 70
    }
  },
  {
    "selector": "edge",
    "css": {
      "color": "#000000",
      "font-family": "Dialog",
      "font-size": 10,
      "line-color": "#666666",
      "line-style": "solid",
      "opacity": 255,
      "source-arrow-shape": "none",
      "target-arrow-shape": "none",
      "text-opacity": 255,
      "width": 3
    }
  }
];

/**
 * Simple Network Viewer
 */
export class NetworkViewer extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      graph: props.graph,
      style: props.style,
      vs: DEF_STYLE
    }
  }


  componentWillReceiveProps(nextProps) {
    console.log('****************** P MOUNT: New graph:');

    this.setState({
      graph: nextProps.graph,
      style: nextProps.style,
      vs: nextProps.graph.style
    });
  }


  updateCyjs() {

    let visualStyle = this.state.vs;
    console.log("VS");
    console.log(visualStyle);

    this.cy = cytoscape({
      container: document.getElementById('cy'),
      elements: this.state.graph.elements,
      style: visualStyle,
      layout: {
        name: "preset"
      }
    }).on('data select select unselect add remove', (ev) => {

        console.log("::::::::::: CyJS Event ::::::::::");
        console.log(ev)

        if (ev.originalEvent.type == "select") {
          let node = ev.cyTarget;
          console.log('tapped ' + node.id());
          //GraphAction.selectNode(node)
        }
      }
    )
  }


  /**
   * Once "cy" is ready, draw network calling raw Cytoscape.js API.
   */
  componentDidUpdate() {
    this.updateCyjs();
  }


  render() {
    return (
      <div class="network-widget">
        <div id="cy" style={this.state.style}></div>
      </div>
    )
  }

}

export default NetworkViewer
