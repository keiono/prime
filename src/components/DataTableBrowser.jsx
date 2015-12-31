import React, { Component, PropTypes } from 'react'
import ReactTabs, {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import {DataTable} from './DataTable.jsx'


export class DataTableBrowser extends Component {

    constructor(props) {
        super(props)

        // Scan and create columns
        const {graph} = props

        let nodeColSet = new Set()
        let edgeColSet = new Set()
        let nodes = []
        let edges = []

        graph.map(entry => this.filter(entry, nodeColSet, edgeColSet, nodes, edges))

        let nodeColumnNames = Array.from(nodeColSet)
        let edgeColumnNames = Array.from(edgeColSet)

        this.state = {
            nodeColumnNames: nodeColumnNames,
            edgeColumnNames: edgeColumnNames,
            nodes: nodes,
            edges: edges
        }
    }

    filter(entry, nodeColumns, edgeColumns, nodes, edges) {
        let d = entry.data
        let keys = Object.keys(d)

        if(keys.includes('source') && keys.includes('target')) {
            // This is an edge
            keys.map(key => edgeColumns.add(key))
            edges.push(entry)
        } else {
            keys.map(key => nodeColumns.add(key))
            nodes.push(entry)
        }
    }


    render() {
        const {graph, ...props} = this.props
        const {nodeColumnNames, edgeColumnNames, nodes, edges} = this.state

        return (
            <Tabs
                onSelect={this.handleSelect}
                selectedIndex={0}
            >
            <TabList>
                <Tab>Node</Tab>
                <Tab>Edge</Tab>
                <Tab>Network</Tab>
            </TabList>

            <TabPanel>
                <DataTable
                    graph={nodes}
                    columnNames={nodeColumnNames}
                    {...props} />
            </TabPanel>
            <TabPanel>
                <DataTable
                    graph={edges}
                    columnNames={edgeColumnNames}
                    {...props} />
            </TabPanel>
            <TabPanel>
                <h2>(TBD)</h2>
            </TabPanel>
            </Tabs>
        )
    }
}


DataTableBrowser.propTypes = {
    graph: PropTypes.array.isRequired
}

export default DataTableBrowser
