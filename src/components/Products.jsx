import React from "react";
import '../styles/Products.css';
import Product from './Product';

export default function Products ({products}) {

    return (
        <div id="products">
            {products.map(product => {
                return <Product key={product.id} product={product} />
            })}
        </div>
    );
};