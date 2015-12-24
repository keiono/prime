import React, { Component, PropTypes } from 'react'

/**
 *
 * Simple Component to select current Visual Style
 *
 */
export default class StyleSelector extends Component {

    render() {
        const { styles } = this.props;

        return (
            <div>
                <label>
                    Current Visual Style:
                </label>

                <select onChange={this.handleSelection.bind(this)}>
                    {styles.map((entry) => (<option key={entry.value} value={entry.value}>{entry.label}</option>))}
                </select>
            </div>
        )
    }

    handleSelection(e) {
        this.props.update(e.target.value)
    }
}


StyleSelector.propTypes = {
    // Action to update selected Style
    update: PropTypes.func.isRequired,

    // List of Visual Styles
    styles: React.PropTypes.array.isRequired
}
