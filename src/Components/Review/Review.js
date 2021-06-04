import './Review.css';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import ProductReview from '../ProductReview/ProductReview';
import Cart from '../Cart/Cart';
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import { UserCartContext } from '../../App';

const Review = () => {
    document.title = 'Devtools | Products Review Page';

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userCart, setUserCart] = useContext(UserCartContext);
    const [cartProduct, setCartProduct] = useState([]);
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
                setCartProduct(data);
                setUserCart(data);
            });
    }, [])


    // Removed EventHandler Func
    const handleRemoveProduct = (key) => {
        const sameProduct = cartProduct.find(pd => pd.product.key === key);
        if (sameProduct) {
            alert('Hey! Are you sure remove this product from your cart?');
        }
    }

    // Increment and Decrement button func:
    const [count, setCount] = useState(1);
    const OnIncrementClick = useCallback((e) => {
        if (count < 5) {
            setCount(count + 1);
        } else {
            alert("Hey! Product count can't be bigger of 5");
        }
    }, [count]);

    const OnDecrementClick = useCallback((e) => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            alert("Hey! Product count can't be lower of 1");
        }
    }, [count]);

    // Added the checkout func:
    const addToCheckout = (product) => {
        console.log('Checkout product', product);
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
                            <span className="items">{userCart.length} Items</span>
                        </h1>
                    </div>
                    <div className="multiple-chec">
                        {
                            cartProduct.map(pd => <ProductReview
                                key={pd.product.key}
                                count={count}
                                OnIncrementClick={OnIncrementClick}
                                OnDecrementClick={OnDecrementClick}
                                addToCheckout={addToCheckout}
                                handleRemoveProduct={handleRemoveProduct}
                                cart={pd}
                            />)
                        }
                    </div>
                </div>

                <div className="cart-control">
                    {/* <Cart cart={cartProduct}>
                        <button onClick={handleProceedCheckout}>Proceed To Checkout</button>
                    </Cart> */}
                </div>
            </div>
        </Container>
    );
};

export default Review;