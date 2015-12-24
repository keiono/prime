import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'
import { update, remove } from '../state/actions/StyleSelectorActions'

import StyleSelector from '../components/StyleSelector.jsx'


class StyleSelectorContainer extends Component {

    render() {
        const { update, styles } = this.props

        return (
            <div>
                <StyleSelector
                    update={update}
                    styles={styles} />
                <button onClick={this.handleRemove.bind(this)}>Remove</button>
            </div>

        )
    }

    handleRemove() {
        this.props.remove(this.props.selectedStyle)
    }
}

function mapStateToProps(state) {
    return {
        styles: state.styleSelector.styles,
        selectedStyle: state.styleSelector.selectedStyle
    }
}


StyleSelectorContainer.propTypes = {
    update: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,

    styles: React.PropTypes.array.isRequired,
    selectedStyle: React.PropTypes.string.isRequired
}


export default connect(
    mapStateToProps,
    {update, remove}
)(StyleSelectorContainer)

