import './Review.css';
import React, { useContext, useEffect, useState } from 'react';
import { removeFromDatabaseCart } from '../../utilities/databaseManager';
import ProductReview from '../ProductReview/ProductReview';
import Cart from '../Cart/Cart';
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import { MdbCartContext } from '../../App';

const Review = () => {
    document.title = 'DevTools | Products Review Page';

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [mdbUserCart, setMdbUserCart] = useContext(MdbCartContext);
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
                setMdbUserCart(data);
            });
    }, [])
    // console.log('Data', cart);
    // console.log('Cart data', mdbUserCart);


    // Removed EventHandler Func
    const handleRemoveProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    // Proceed Checkout eventHandler func
    const history = useHistory();
    const handleProceedCheckout = () => {
        history.push('/checkout');
    }

    return (
        <Container>
            <div className="checkout-main">
                <div className="prod-review-control">
                    <div className="hheader">
                        <h1>
                            <span>Your wishlist products</span>
                            <span className="items">{mdbUserCart.length} Items</span>
                        </h1>
                    </div>
                    <div className="multiple-chec">
                        {
                            cart.map(pd => <ProductReview
                                key={pd.product.key}
                                handleRemoveProduct={handleRemoveProduct}
                                cart={pd}
                            />)
                        }
                    </div>
                </div>

                <div className="cart-control">
                    <Cart cart={cart}>
                        <button onClick={handleProceedCheckout}>Proceed To Checkout</button>
                    </Cart>
                </div>
            </div>
        </Container>
    );
};

export default Review;