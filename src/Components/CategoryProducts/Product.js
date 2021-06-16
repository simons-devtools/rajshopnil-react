import React from 'react';
import './ProductStyle.css';
import HolderImage from '../../images/icons/loading.gif';
import EditPng from '../../images/icons/cart-1.png';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const ProductArr = props.product;
    const { key, category, name, price, photoUrl } = ProductArr;

    const imgStyle = {
        width: '220px',
        height: '170px',
        padding: '20px',
        margin: '10px 0',
        border: '1px solid #E2E8F0'
    }

    return (
        <Link to={`/product/${category}/${key}`}>
            <div className="parent view_port">
                <div className="polling_message">
                    {
                        photoUrl !== '' ? <img src={photoUrl} style={imgStyle} alt="product-img" /> : <img src={HolderImage} alt="load-img" />
                    }
                </div>
                <div className="child cylon_eye">
                    <img src={EditPng} style={{ width: '50px', height: '50px' }} alt="" />
                    <h2>Price: ${price}</h2>
                    <h3>{name}</h3>
                </div>
            </div>
        </Link >
    );
}

export default Product;