import React from 'react';
import './Payment.css';
import Image1 from '../../images/product-pic/bkash.png';
import Image2 from '../../images/product-pic/nagad.png';
import Image3 from '../../images/product-pic/payoneer.png';
import Image4 from '../../images/product-pic/paypal.png';

const Payment = () => {
    return (
        <div>
            <div className="payment-container">
                <div className="payment-method">
                    <h1>Select payment method</h1>
                    <div className="select-payment">
                        <img src={Image1} className="item-box" alt=""/>
                        <img src={Image2} className="item-box" alt=""/>
                        <img src={Image3} className="item-box" alt=""/>
                        <img src={Image4} className="item-box" alt=""/>
                    </div>
                </div>

                <div className="payment-summary">
                    <h1>Order Summary</h1>
                    <h3 className="payment-info">
                        <span>Subtotal (1 items and shipping fee included)</span>
                        <span className="right">$0</span>
                    </h3>
                    <h2 className="payment-info">
                        <span>Total Amount</span>
                        <span className="right">$0</span>
                    </h2>
                </div>
            </div>

            <div style={{textAlign: 'center'}}>
                <h2 style={{borderBottom: '1px solid #e4dbec'}}>Next customer messages</h2>
                <h1 style={{paddingTop: '10px'}}>You are welcome to continue shopping!</h1>
                <h3 style={{color: 'green'}}>Your order proccesing</h3>
            </div>
        </div>
    );
};

export default Payment;