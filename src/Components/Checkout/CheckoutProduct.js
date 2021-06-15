import React from 'react';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { Link } from 'react-router-dom';

const CheckoutProduct = (props) => {
    // console.log('Checkout', props);
    const { product, removeFromCheckout } = props;
    const { key, name, category, photoUrl, price, quantity } = product;

    return (
        <div className="checkout-container">
            <div className="packages">
                <h2>
                    <span><LibraryAddIcon className="icons" /> </span>
                    <span>Product packages</span>
                </h2>
            </div>

            <div className="review" style={{ padding: '15px 20px' }}>
                <div className="product-image">
                    <img src={photoUrl} alt="checkout-product-pic" />
                </div>
                <div className="review-rigth">
                    <div className="middlee">
                        <Link to={`/product/${category}/${key}`}>
                            <h2 style={{ color: '#db2804b9' }}>{name}</h2>
                        </Link>
                        <h3 className="prod-info">Category: {category}</h3>
                        <button onClick={() => removeFromCheckout(key)} className="delete"><RemoveShoppingCartIcon /></button>
                    </div>
                    <div>
                        <h2 className="prod-price">Price: ${price}</h2>
                        <h3>Quantity: {quantity}</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckoutProduct;