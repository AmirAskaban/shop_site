import * as types from "../contants/actionTypes";

export const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

export const addToCart = productId => ({
    type: types.ADD_TO_CART,
    productId
})
export const chekout = () => ({
    type : types.CHEKOUT_REQUEST
})