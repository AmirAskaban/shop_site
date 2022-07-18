import React, { Component } from 'react';
import Product from "./Product";
class ProductItem extends Component {
    render() {
        const { product, onAddToCartClicked } = this.props;
        return (
            <div style={{ marginBottom: 20 }}>
                <Product {...product} quantity={product.inventory} />
                <button disabled={product.inventory > 0 ? '' : 'disabled'} onClick={onAddToCartClicked}>
                    {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
                </button>
            </div>
        )
    }
}

export default ProductItem;
