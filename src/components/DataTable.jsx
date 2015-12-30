import React, { Component, PropTypes } from 'react'
import { Table, Cell, Column } from 'fixed-data-table'
import { TableCell } from './TableCell.jsx'

/**
 * Basic Table Component to render graph properties
 */
export class DataTable extends Component {

    constructor(props) {
        super(props)

        // Scan and create columns
        const {columnNames} = props

        let colW = {}
        columnNames.map(columnName => (colW[columnName] = 200))

        this.state = {
            columnWidths: colW
        };

        this._onColumnResizeEndCallback = this._onColumnResizeEndCallback.bind(this)
    }

    render() {

        const { graph, columnNames, ...props } = this.props

        // State: Table Appearence
        const { columnWidths } = this.state
        const numRows = graph.length

        console.log('---TBL rendering--')
        console.log(graph)

        return (
            <Table
                rowsCount={numRows}
                onColumnResizeEndCallback={this._onColumnResizeEndCallback}
                isColumnResizing={false}
                rowHeight={40}
                headerHeight={50}
                height={300}
                width={800}
                {...props}>

                {columnNames.map(columnName => (this.createColumn(columnName, graph, columnWidths, {...props})))}

            </Table>
        )
    }

    createColumn(colName, graph, columnWidths, ...props) {
        return (
            <Column
                columnKey={colName}
                header={<Cell>{colName}</Cell>}
                cell={
                    <TableCell
                        graph={graph}
                        field={colName}
                        {...props}
                    />
                }
                width={columnWidths[colName]}
                isResizable={true}
            />
        )
    }

    _onColumnResizeEndCallback(newColumnWidth, columnKey) {
        this.setState(({columnWidths}) => ({
            columnWidths: {
                ...columnWidths,
                [columnKey]: newColumnWidth,
            }
        }));
    }
}

DataTable.propTypes = {
    graph: PropTypes.array.isRequired,
    columnNames: PropTypes.array.isRequired
}

export default DataTable
