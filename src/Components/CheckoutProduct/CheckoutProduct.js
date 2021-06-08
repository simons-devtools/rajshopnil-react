import React from 'react';
import './CheckoutProduct.css';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

const CheckoutProduct = (props) => {
    // console.log('Checkout', props);
    const { product, removeFromCheckout } = props;
    const { key, name, category, photoUrl, price, quantity } = product;

    return (
        <div className="checkoutt-wrapper">

            <div className="packages">
                <h2>
                    <span><LibraryAddIcon /> </span>
                    <span>Product packages</span>
                </h2>
            </div>

            <div className="checkoutt">
                <div className="product-image">
                    <img src={photoUrl} alt="checkout-product-pic" />
                </div>
                <div className="review-product extra">
                    <h2 style={{ color: '#db2804b9' }}>{name}</h2>
                    <h3 style={{ padding: '10px 0' }}>Category: {category}</h3>
                    <button onClick={() => removeFromCheckout(key)} className="delete"><DeleteSweepIcon /></button>
                </div>
                <div className="review-product">
                    <h1 className="prod-Price">Price: ${price}</h1>
                    <h3>Quantity: {quantity}</h3>
                </div>
            </div>

        </div>
    );
};

export default CheckoutProduct;