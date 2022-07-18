import { ADD_TO_CART, RECEIVE_PRODUCTS } from '../contants/actionTypes';
const products = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                    obj[product.id] = product
                    return obj;
                }, {})
            }
        case ADD_TO_CART:
            let { productId } = action;
            let product = state[productId];
            return {
                ...state,
                [productId]: {
                    ...product,
                    inventory: product.inventory - 1
                }
            }
        default:
            return state;
    }
}
export default products;