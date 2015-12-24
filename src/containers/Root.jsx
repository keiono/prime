import React from "react";
import DevTools from './DevTools.jsx'

import StyleSelectorContainer from '../containers/StyleSelectorContainer.jsx'


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

            <StyleSelectorContainer/>

            <DevTools/>
        </div>
    )
  }

}

