import React, { Component, PropTypes } from 'react'

import ReactDataGrid from 'react-data-grid/addons'

//var ReactDataGrid = require('react-data-grid/addons');


export default class TableBrowser extends Component {

    constructor(props) {
        super(props)
    }

    render() {


        const { columns, _rows } = this.props;

        console.log("----------- Table render.")
        console.log(this.props)

        return (
            <ReactDataGrid
                columns={columns}
                rowGetter={this.rowGetter}
                rowsCount={_rows.length}
                minHeight={500}/>
        )
    }

    rowGetter(i) {
        return this.props._rows[i];

    }
}


TableBrowser.propTypes = {
    columns: PropTypes.array.isRequired,
    _rows: PropTypes.array.isRequired
}
