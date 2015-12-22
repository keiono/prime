import { UPDATE_STYLE, REMOVE_STYLE } from '../actions/styleSelector'

const defaultStyles = [
    {
        val: "default",
        label: "default"
    },
    {
        val: "black",
        label: "default-black"
    },
    {
        val: "directed",
        label: "Directed"
    }
];

export default function styleSelector(state = defaultStyles, action) {

    switch (action.type) {

        case UPDATE_STYLE:
            return state;

        case REMOVE_STYLE:
            console.log("Deleting...");
            return state;

        default:
            return state;
    }
}
