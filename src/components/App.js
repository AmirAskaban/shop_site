import React, { Component } from 'react';
import shop from '../api/shop';
import ProductList from "./ProductList";
import { connect } from "react-redux";
import { receiveProducts } from "../actions";
import Cart from './Cart';

class App extends Component {

  componentWillMount() {
    shop.getProducts((products) => this.props.receiveProducts(products) )
  }
  render() {
    return (
      <div>
        <h2>Shopping Cart Example</h2>
        <hr/>
        <ProductList/>
        <hr/>
        <Cart />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  receiveProducts : products => dispatch(receiveProducts(products))
})

export default connect(null , mapDispatchToProps)(App);
