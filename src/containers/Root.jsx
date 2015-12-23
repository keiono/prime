import React from "react";
import DevTools from './DevTools.jsx'

import StyleSelector from '../components/StyleSelector.jsx'

export class Root extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
        <div>
            <h1>
                Welcome to Cytoscape Prime
            </h1>
            <StyleSelector/>

            <DevTools/>
        </div>
    )
  }

}
