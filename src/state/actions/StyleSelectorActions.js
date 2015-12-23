export const UPDATE_STYLE = 'UPDATE_STYLE';
export const REMOVE_STYLE = 'REMOVE_STYLE';

export function update(selected) {
    console.log("# Update called:")
    console.log(selected)

    return {
        type: UPDATE_STYLE,
        selected

    }
}

export function remove(index) {
    return {
        type: REMOVE_STYLE,
        index
    }
}
