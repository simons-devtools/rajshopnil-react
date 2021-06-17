import React from 'react';
import './ProductStyle.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { key, category, name, price, photoUrl } = props.product;

    return (
        <Link to={`/product/${category}/${key}`}>
            <div className="productt-box">
                <img src={photoUrl} alt="product-img" />
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
            </div>
        </Link >
    );
}

export default Product;