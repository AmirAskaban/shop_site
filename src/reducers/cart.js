import { ADD_TO_CART, CHEKOUT_REQUEST } from '../contants/actionTypes'
const initialState = {
    addedIds: [],
    quantityById: {}
}
const addedIds = (state = initialState.addedIds, action) => {
    if (state.indexOf(action.productId) !== -1) {
        return state;
    }
    return [...state, action.productId];
}
const quantityById = (state = initialState.quantityById, action) => {
    const { productId } = action;
    return {
        ...state,
        [productId]: (state[productId] || 0) + 1
    }
}
const cart = (state = initialState, action) => {
    switch (action.type) {
        case CHEKOUT_REQUEST:
            return initialState;
        case ADD_TO_CART:
            return {
                addedIds: addedIds(state.addedIds, action),
                quantityById: quantityById(state.quantityById, action)
            }
        default:
            return state;
    }
}
export default cart;