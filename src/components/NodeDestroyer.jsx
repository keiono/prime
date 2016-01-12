import React from "react"
import { removeNode } from "../state/actions/GraphAction.jsx"

export class NetworkDestroyer extends React.Component {

  constructor(props) {
    super(props)
    this.removeNode = this.removeNode.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      node_name: ""
    }
  }

  removeNode() {
    this.props.action(removeNode(this.state.node_name))
  }

  handleChange(event) {
    this.setState({node_name: event.target.value});
  }

  render() {
    return (
      <div>
        <p>{this.props.graph.length}</p>
        <input type="text" value={this.state.node_name} onChange={this.handleChange}/>;
        <button onClick={this.removeNode}></button>
      </div>
    )
  }

}

export default NetworkDestroyer
