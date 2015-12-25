import React from "react"
import cytoscape from "cytoscape"

export class NetworkViewer extends React.Component {

  constructor(props) {
    super(props)
    this.props = props
    this.style = {
      width: '200px',
      height: '200px'
    }
  }

  componentDidMount() {
    console.log(this.props)
    this.cy = cytoscape({
      container: document.getElementById('cy'),
      elements: this.props.graph
    }).on('data select select unselect add remove', () => {
      this.props.action() //some action goes in here
      console.log("Data was changed")
    }
  )
  }

  shouldComponentUpdate(_nextProps, _nextState) {
    return false
  }

  render() {
    return (
      <div>
        <div id="cy" style={this.style}/>
      </div>
    )
  }

}

export default NetworkViewer
