import React, { Component, PropTypes } from 'react'

class StyleSelector extends Component {

    constructor(props) {
        super(props)
        console.log(props)
        console.log("----------- initialized.")
    }

    render() {

        const { styles, selectedStyle } = this.props;
        console.log("----------- render.")
        console.log(this.state);

        return (
            <div>
                <label>
                    Current Visual Style:
                </label>

                <select value={selectedStyle} onChange={this.handleChange}>
                  <option key="1" value="t1">test1</option>
                    <option key="2" value="t2">test2</option>
                </select>
            </div>
        )
    }

    handleChange(e) {
        console.log(e)
        console.log(props.styles)
        console.log("############ Change called ########## ")
    }
}

StyleSelector.propTypes = {
    // List of Visual Styles
    styles: React.PropTypes.array.isRequired,

    // Current Visual Styles
    selectedStyle: PropTypes.string.isRequired
};

export default StyleSelector
