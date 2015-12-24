export const STYLE_SELECTED = 'STYLE_SELECTED';
export const STYLE_REMOVED = 'STYLE_REMOVED';

export function update(selected) {
    return {
        type: STYLE_SELECTED,
        selected
    }
}

export function remove(toBeRemoved) {
    return {
        type: STYLE_REMOVED,
        toBeRemoved
    }
}
