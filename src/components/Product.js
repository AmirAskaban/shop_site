import React, { Component } from 'react';

class Product extends Component {
    render() {
        const { title, price, quantity } = this.props;
        return (
            <div>
                {title} - ${price} x {quantity}
            </div>
        )
    }
}

export default Product;
