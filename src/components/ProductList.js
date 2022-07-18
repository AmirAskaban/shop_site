import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { connect } from "react-redux";
import { addToCart } from '../actions';

class ProductList extends Component {
  render() {
    const { products , addToCart } = this.props;
    return (
      <div>
        <h3>Products</h3>
        {products.map(product => 
            <ProductItem key={product.id} product={product} onAddToCartClicked={() => addToCart(product.id)} />
        )}
      </div>
    )
  }
}

const getProducts = products => Object.keys(products).map(id => products[id])

const mapStateToProps = state => {
  return {
    products : getProducts(state.products)
  }
}

const mapDispatchToProps = dispatch => ({
    addToCart : productId => dispatch(addToCart(productId))
})

export default connect(mapStateToProps , mapDispatchToProps)(ProductList);
