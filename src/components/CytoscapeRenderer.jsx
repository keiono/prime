import React from "react"
import cytoscape from "cytoscape"

import {GraphAction} from '../state/actions/GraphAction.jsx'


// TODO: consolidate Cytoscape-dependent tags
const CYTOSCAPE_TAG = 'cy';
const DEF_LAYOUT = 'preset';
const CYJS_SELECT = 'select';
const SUPPORTED_CYJS_EVENTS = [CYJS_SELECT];


/**
 *
 * Simple Network Viewer Component
 */
class CytoscapeRenderer extends React.Component {

  constructor(props) {
    super(props);
  }

  updateCyjs() {

    console.log('########## Cytoscape JS rendering called ############');

    console.log("3===========================")
    console.log(this.props)
    let visualStyle = this.props.graph.graph.style;

    this.cy = cytoscape({

      container: document.getElementById(CYTOSCAPE_TAG),
      elements: this.props.graph.graph.elements,
      style: visualStyle,
      layout: {
        name: DEF_LAYOUT
      }

    })

    this.setEventListener()

  }

  setEventListener() {
    this.cy.on('data select unselect add remove', (ev) => {

        console.log("GOT CyJS Event ::::::::::");
        console.log(ev)

        if (ev.originalEvent.type === CYJS_SELECT) {
          let selected = ev.cyTarget;
          this.handleSelect(selected)
        }
      }
    )
  }


  handleSelect(selected) {
    console.log("* Selection Handler")
    this.props.cyjsSelected(selected)
  }

  /**
   * Once "cy" is ready, draw network calling raw Cytoscape.js API.
   */
  componentDidUpdate() {
    this.updateCyjs();
  }

  componentWillReceiveProps(nextProps) {

    console.log("NEXR===========================")
    console.log(nextProps);
  }

  render() {
    console.log("rend===========================")
    console.log(this.props);

    return (
      <div class="network-widget">
        <div id="cy" style={this.props.style}></div>
      </div>
    )
  }
}

export default CytoscapeRenderer
