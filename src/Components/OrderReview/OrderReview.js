import React from 'react';
import './OrderReview.css';
import ProdSample from '../../images/product-pic/prod-sample.jpg';

const OrderReview = () => {
    return (
        <div>
            <div className="">
                {/* <h1>Your products order review empty!</h1> */}
                <h1 style={{borderBottom: '1px solid #e4dbec'}}>Your products order review</h1>
            </div>
            <div className="review-container">
                <h2 className="product-review">
                    <span className="order-status">Order complete</span>
                    <span className="prod-name">Visual studio code</span>
                    <span className="prod-categorie">Code editor</span>
                    <span className="prod-amount">$5</span>
                </h2><img src={ProdSample} className="prod-sample" alt="product-pic" />
            </div>
        </div>
    );
};

export default OrderReview;