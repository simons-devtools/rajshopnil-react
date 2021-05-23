import React from 'react';
import './WishList.css';
import ProductImage from '../../images/product-pic/prod-sample.jpg';
import Wishlist from '../../images/icons/edit-1.png';
import AddCart from '../../images/icons/cart-1.png';

const WishList = () => {

    // Single product details handler
    const handleProdDetail = (event) => {
        console.log('ID NO=', event);
        // Handle prod details...
    }

    // Product add to cart handler
    const handleAddToCart = (event) => {
        console.log('ID NO=', event);
        // Handle prod cart...
    }

    return (
        <div>
            <h1 style={{borderBottom: '1px solid #e4dbec'}}>Your most important product wishlist</h1>
            <div className="wishlist-container">
                <div className="wishlist-product">
                    <div className="product">
                        <img src={ProductImage} className="product-photo" alt="product-img" />
                        <h4 className="product-title">
                            <span>Visual studio code</span>
                            <span style={{ paddingLeft: '10px' }}>$5</span>
                        </h4>
                    </div>
                    <div className="product-hover">
                        <img onClick={() => handleProdDetail()} src={Wishlist} className="wish" alt="wishlist-alt" />
                        <img onClick={() => handleAddToCart()} src={AddCart} className="added" alt="cart-alt" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishList;