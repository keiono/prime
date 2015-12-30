import React, { Component } from 'react'
import { Cell } from 'fixed-data-table'

const DATA_TAG = 'data'

//TODO: Split cell renderers
export class TableCell extends Component {

    render() {
        const {rowIndex, field, graph} = this.props
        let value = graph[rowIndex][DATA_TAG][field]

        if(value instanceof Object) {
            return this.renderValue(value.toString())
        } else {
            return this.renderValue(value)
        }
    }


    renderValue(value) {
        const {...props} = this.props

        return (
            <Cell {...props}>
                {value}
            </Cell>
        )
    }
}

export default TableCell
