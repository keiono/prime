import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'

//import {ReactDataGrid} from 'react-data-grid'

var ReactDataGrid = require('react-data-grid');

class TableBrowserContainer extends Component {

    render() {

        console.log("----------- Table render called.")
        console.log(this.props)
        console.log(ReactDataGrid)

        const { columns, _rows, ...props} = this.props

        return (
                <ReactDataGrid
                    columns={columns}
                    rowGetter={this.rowGetter}
                    rowsCount={_rows.length}
                    minHeight={500}
                />
        )
    }

    rowGetter(i) {
        return this.props._rows[i]
    }
}

class MyTextCell extends React.Component {
    render() {
        const {rowIndex, field, data, ...props} = this.props;
        return (
            <Cell {...props}>
                {data[rowIndex][field]}
            </Cell>
        );
    }
}

function mapStateToProps(state) {
    return {
        columns: state.tableBrowser.columns,
        _rows: state.tableBrowser._rows
    }
}


TableBrowserContainer.propTypes = {
    _rows: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired
}


export default connect(
    mapStateToProps,
    {}
)(TableBrowserContainer)

