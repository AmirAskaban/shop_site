import React, { Component } from 'react';
import { connect } from "react-redux";
import Product from './Product';
import { chekout } from '../actions'
class Cart extends Component {
    render() {
        const { products, total, chekout } = this.props;
        const hasProducts = products.length > 0
        const nodes = hasProducts ? (
            products.map(product =>
                <Product key={product.id} {...product} />
            )
        ) : (
            <em>Please add some products to cart.</em>
        )
        return (
            <div>
                <h3>Your Cart</h3>
                <div>{nodes}</div>
                <p>Total: ${total}</p>
                <button disabled={hasProducts ? '' : 'disabled'} onClick={chekout} >
                    Checkout
                </button>
            </div>
        )
    }
}


const getCartProducts = state => {
    return state.cart.addedIds.map(id => ({
        ...state.products[id],
        quantity: (state.cart.quantityById[id] || 0)
    }))
}

const getTotal = state => state.cart.addedIds.reduce((total, id) => total + state.products[id].price * (state.cart.quantityById[id] || 0), 0).toFixed(2)
const mapDispatchToProps = dispatch => ({
    chekout: () => dispatch(chekout())
})

const mapStateToProps = state => ({
    products: getCartProducts(state),
    total: getTotal(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);