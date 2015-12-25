export const UPDATE_STYLE = 'UPDATE_STYLE';
export const REMOVE_STYLE = 'REMOVE_STYLE';

export function update() {
    return {
        type: UPDATE_STYLE

    }
}

export function remove(index) {
    return {
        type: REMOVE_STYLE,
        index
    }
}
