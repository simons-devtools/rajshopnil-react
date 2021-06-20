import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Shipment from './Shipment';
import React, { useContext, useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { UserContext } from '../../App';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import EmptyCartImg from '../../images/icons/empty1.jpg';

const Checkout = () => {
    document.title = 'Rajshopnil | Products Checkout Page';

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [cart, setCart] = useState([]);

    // Get the cart products from mongodb cloud:
    useEffect(() => {
        const savedCart = getDatabaseCart();
        setCart(savedCart);
    }, [])

    // Remove the old checkout cart func:
    const removeFromCheckout = (addedTOKey) => {
        const sameProduct = cart.find(pd => pd.key === addedTOKey);
        if (sameProduct) {
            alert(`Are you sure remove this product from your cart? KEY=${addedTOKey}`);
            const newCart = cart.filter(pd => pd.key !== addedTOKey);
            setCart(newCart);
            removeFromDatabaseCart(addedTOKey);
        }
        else {
            alert('Hey! Please add the product first!');
        }
    }

    return (
        <Container>
            <div className="checkout-mains">

                <div className="left-contents">
                    <div className="headerr">
                        <h1>
                            <span>Your cart products</span>
                            <span className="items">({cart.length}) Items</span>
                        </h1>
                    </div>

                    {
                        cart.length === 0 ?
                            /* Empty content styles */
                            <div className="empty-default">
                                <img src={EmptyCartImg} alt="" />
                                <h1>Horray! Your current cart is empty. . . . .!!</h1>
                                <Link to="/home">
                                    <button>Continue Shopping</button>
                                </Link>
                            </div> :
                            <div className="checkout-props">
                                {
                                    cart.map(pd => <CheckoutProduct
                                        key={pd._id}
                                        product={pd}
                                        removeFromCheckout={removeFromCheckout}
                                    />)
                                }
                            </div>
                    }
                </div>

                <div className="right-contents">
                    <Shipment cart={cart} />
                </div>

            </div>
        </Container>
    );
};

export default Checkout;