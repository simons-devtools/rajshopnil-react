import './Checkout.css';
import React, { useContext, useEffect, useState } from 'react';
import Shipment from '../Shipment/Shipment';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { Container } from '@material-ui/core';
import { UserContext } from '../../App';

const Checkout = () => {
    document.title = 'Devtools | Products Checkout Page';

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [cart, setCart] = useState([]);

    // Get the cart products from mongodb cloud:
    useEffect(() => {
        fetch('http://localhost:5200/bookings?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log('Data', data);
                setCart(data);
            });
    }, [])
    // console.log('Data', cart);
    // console.log('Cart data', mdbUserCart);

    return (
        <Container>
            <div className="checkout-mains">
                <div className="left-contents">
                    <div className="headerr">
                        <h1>
                            <span>Your order products</span>
                            <span className="items">{cart.length} Items</span>
                        </h1>
                    </div>
                    <div className="checkout-props">
                        {
                            cart.map(pd => <CheckoutProduct
                                key={pd._id}
                                product={pd}
                            />)
                        }
                    </div>
                </div>

                <div className="right-contents">
                    <Shipment cart={cart} />
                </div>
            </div>
        </Container>
    );
};

export default Checkout;