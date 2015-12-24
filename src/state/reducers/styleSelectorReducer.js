import { STYLE_SELECTED, STYLE_REMOVED } from '../actions/StyleSelectorActions'


// TODO: Load remote Style JSON and link it to these values.

const DEFAULT_STYLE = "default"

const defaultStyles = {
    styles: [
        {
            value: DEFAULT_STYLE,
            label: "Default Style"
        },
        {
            value: "black",
            label: "Black Background"
        },
        {
            value: "directed",
            label: "Directed"
        }
    ],

    selectedStyle: DEFAULT_STYLE
};


export default function styleSelector(state = defaultStyles, action) {

    switch (action.type) {

        case STYLE_SELECTED:
            return Object.assign({}, state, {
                selectedStyle: action.selected
            })
        case STYLE_REMOVED:
            // User cannot remove default style.
            if(action.toBeRemoved === DEFAULT_STYLE) {
                return state
            }

            let newStyleList = state.styles.filter(style => {return style.value !== action.toBeRemoved})
            return Object.assign({}, state, {
                styles: newStyleList,
                selectedStyle: DEFAULT_STYLE
            })
        default:
            return state;
    }
}
