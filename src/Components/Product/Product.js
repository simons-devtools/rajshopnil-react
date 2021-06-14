import React from 'react';
import HolderImage from '../../images/icons/loading.gif';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const ProductArr = props.product;
    const { key, category, name, price, photoUrl } = ProductArr;

    return (
        <Link to={`/product/${category}/${key}`}>
            <div className="product-container">
                <div className="product">
                    {
                        photoUrl !== '' ? <img src={photoUrl} className="product-img" alt="product-img" /> : <img src={HolderImage} className="product-img" alt="" />
                    }
                    <h4 className="prod-name">
                        <span>{name} </span> <br />
                        <strong style={{ fontSize: '12px', color: 'tomato' }}>Price: ${price}</strong>
                    </h4>
                </div>
            </div>
        </Link>
    );
}

export default Product;