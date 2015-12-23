import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as StyleActions from '../state/actions/StyleSelectorActions'


class StyleSelector extends Component {

    render() {

        const { update, styles, selectedStyle } = this.props;
        console.log("----------- render.")
        console.log(this.props)
        console.log(update)
        styles.map((val, idx) => {console.log(val)})

        return (
            <div>
                <label>
                    Current Visual Style:
                </label>

                <select value={selectedStyle} onChange={update}>
                    {styles.map((o, i) => (<option key={i} value={i}>{o.label}</option>))}
                </select>
            </div>
        )
    }

}

StyleSelector.propTypes = {
    update: PropTypes.func.isRequired,

    // List of Visual Styles
    styles: React.PropTypes.array.isRequired,

    // Current Visual Styles
    selectedStyle: PropTypes.string.isRequired
}

function mapStateToProps(state) {

    console.log("############!!! select called ########## ")
    console.log(state)

    return {
        styles: state.styleSelector.styles,
        selectedStyle: state.styleSelector.selectedStyle
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(StyleActions, dispatch)
}

// Wrap the component to inject dispatch and state into it
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StyleSelector)

