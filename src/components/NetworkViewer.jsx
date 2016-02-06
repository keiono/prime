import React from "react"
import cytoscape from "cytoscape"

import {GraphAction} from '../state/actions/GraphAction.jsx'

export class NetworkViewer extends React.Component {

    constructor(props) {
        super(props)
        console.log("Setting state")
        console.log(props)
        this.state = {graph: props.graph}
        this.style = {
            width: '100%',
            height: '800px'
        }
    }

    componentDidMount() {
        console.log(this.props)
        this.cy = cytoscape({
            container: document.getElementById('cy'),
            elements: this.state.graph
        }).on('data select select unselect add remove', (ev) => {
                console.log("::::::::::: CyJS Event ::::::::::")
                console.log(ev)

                if (ev.originalEvent.type == "select") {
                    let node = ev.cyTarget;
                    console.log('tapped ' + node.id());
                    GraphAction.selectNode(node)
                }
                console.log(this.props)
                this.props.action() //some action goes in here
                console.log("Data was changed")
            }
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({graph: nextProps.graph})
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
