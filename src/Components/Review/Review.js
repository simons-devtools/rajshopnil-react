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

    // Increment button func:
    const [count, setCount] = useState(1);
    const OnIncrementClick = useCallback((e) => {
        if (count < 5) {
            setCount(count + 1);
        } else {
            alert("Hey! Product count can't be bigger of 5");
        }
    }, [count]);

    // Decrement button func:
    const OnDecrementClick = useCallback((e) => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            alert("Hey! Product count can't be lower of 1");
        }
    }, [count]);

    // Added the new checkout cart func:
    const addToCheckout = (product, count) => {
        const addedTOKey = product.key;
        const sameProduct = cart.find(pd => pd.key === addedTOKey);
        if (sameProduct) {
            if (sameProduct.quantity === count) {
                alert('Hey! You are allready added this product of your cart! Please try again another product OR count the quantity.');
            }
            else {
                alert(`Hey! Are you sure replace this product to your cart? KEY=${addedTOKey}`);
                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].key === addedTOKey) {
                        cart.splice(i, 1); // remove same product.
                        replaceOldCart(product, count);
                    }
                }
            }
        }
        else {
            alert(`Hey! Are you sure add this product to your cart? KEY=${addedTOKey}`);
            replaceOldCart(product, count);
        }
    }

    // 
    const replaceOldCart = (product, count) => {
        let newCount = 0;
        let newCart;
        product.quantity = 0;
        newCount = product.quantity + count;
        product.quantity = newCount;
        newCart = [...cart, product];
        setCart(newCart);
    }
    // console.log(cart);

    // Remove the old checkout cart func:
    const removeFromCheckout = (addedTOKey) => {
        const sameProduct = cart.find(pd => pd.key === addedTOKey);
        if (sameProduct) {
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].key === addedTOKey) {
                    alert(`Are you sure remove this product from your cart? KEY=${addedTOKey}`);
                    cart.splice(i, 1);
                    let replaceCart = [...cart];
                    setCart(replaceCart);
                }
            }
        }
        else {
            alert('Hey! Please add the product first!');
        }
    }

    // Delete wishlish product EventHandler Func:
    const handleDeleteProduct = (key) => {
        const sameProduct = cartProduct.find(pd => pd.product.key === key);
        if (sameProduct) {
            alert(`Hey! Are you sure remove this product from your cart? KEY=${key}`);
        }
    }

    // Proceed Checkout eventHandler func
    const history = useHistory();
    const handleProceedCheckout = () => {
        // history.push('/checkout');
        // console.log(cart);
        cart.length = 0;
        let newData = [...cart];
        // console.log(newData);
        setCart(newData);
    }
    // console.log(cart);

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
                                removeFromCheckout={removeFromCheckout}
                                handleDeleteProduct={handleDeleteProduct}
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