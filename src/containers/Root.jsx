import React from "react";
import DevTools from './DevTools.jsx'

export class Root extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
        <div>
          <p>Welcome to Cytoscape Prime</p>
          <DevTools/>
        </div>
    )
  }

}
