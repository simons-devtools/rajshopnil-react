import React from 'react';
import './ProductStyle.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { key, category, name, price, photoUrl } = props.product;

    return (
        <Link to={`/product/${category}/${key}`}>
            <div className="productt-box">
                <img src={photoUrl} alt="product-img" />
                <h3>{name}</h3>
                <h3 style={{ letterSpacing: '2px' }}>
                    <span style={{ color: 'tomato' }}>Price: ${price}</span>
                    <span className="choose"><FavoriteBorderIcon /></span>
                </h3>
            </div>
        </Link >
    );
}

export default Product;