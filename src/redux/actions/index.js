export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: 5
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}
