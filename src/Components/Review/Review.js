import './Review.css';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import ProductReview from '../ProductReview/ProductReview';
import Cart from '../Cart/Cart';
import EmptyCartImg from '../../images/icons/empty1.jpg';
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import { UserCartContext } from '../../App';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Review = () => {
    document.title = 'Rajshopnil | User wishlist Page';

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userCart, setUserCart] = useContext(UserCartContext);
    const [cartProduct, setCartProduct] = useState([]);
    const [count, setCount] = useState(1);
    const [cart, setCart] = useState([]);

    // Get users "WISHLIST PRODUCTS" from mongodb cloud:
    useEffect(() => {
        fetch('https://rajshopnilserver.herokuapp.com/bookings?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setCartProduct(data);
            })
    }, [loggedInUser.email])

    // For set the cart busket:
    useEffect(() => {
        let cartBox = cartProduct;
        setUserCart(cartBox)
    });

    // Get users "CART PRODUCTS" from mongodb cloud:
    useEffect(() => {
        const savedCart = getDatabaseCart();
        setCart(savedCart);
    }, [setCart]);

    // Increment button func:
    const OnIncrementClick = useCallback((e) => {
        count < 5 ? setCount(count + 1) : alert("Hey! Product count can't be bigger of 5");
    }, [count]);

    // Decrement button func:
    const OnDecrementClick = useCallback((e) => {
        count > 1 ? setCount(count - 1) : alert("Hey! Product count can't be lower of 1");
    }, [count]);

    // Added the new checkout CART PRODUCTS func:
    const addToCheckout = (product, count) => {
        const addedTOKey = product.key;
        if (cart.length === 0) {
            alert(`Hey! Are you sure add this product to your cart? KEY=${addedTOKey}`);
            replaceOldCart(product, count);
        }
        else {
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
                if (cart.length > 4) {
                    alert('Sorry bro! We cannot supply you more than 5 products.');
                }
                else {
                    alert(`Hey! Are you sure add this product to your cart? KEY=${addedTOKey}`);
                    replaceOldCart(product, count);
                }
            }
        }
    }

    // Replace the older CART BOX func:
    const replaceOldCart = (product, count) => {
        let newCount = 0;
        let newCart;
        product.quantity = 0;
        newCount = product.quantity + count;
        product.quantity = newCount;
        setCount(newCount);
        newCart = [...cart, product];
        setCart(newCart);
        addToDatabaseCart(newCart);
    }

    // Remove the localstorage/old checkout cart func:
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

    // Delete mongodb/wishlish product EventHandler Func: Route: (/oneProductDelete/:id)
    function handleDeleteProduct(addedKey) {
        let sameKeyProduct = cartProduct.find(pd => pd._id === addedKey);
        const sameKey = sameKeyProduct.product.key;

        fetch(`https://rajshopnilserver.herokuapp.com/deleteOne/${addedKey}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                // console.log('Deleted is', result);
                alert('Are you sure delete this product from your wishlist...??');
                for (let i = 0; i < cartProduct.length; i++) {
                    const prod = cartProduct[i];
                    if (prod._id === addedKey) {
                        cartProduct.splice(i, 1);
                        let newCartProducts = [...cartProduct];
                        setCartProduct(newCartProducts);
                        setUserCart(newCartProducts);

                        for (let i = 0; i < cart.length; i++) {
                            const cProduct = cart[i];
                            if (cProduct.key === sameKeyProduct.product.key) {
                                cart.splice(i, 1);
                                let fixedCart = [...cart];
                                setCart(fixedCart);
                                removeFromDatabaseCart(sameKey);
                            }
                        }
                    }
                }
            })
    }

    // Proceed Checkout eventHandler func
    const history = useHistory();
    const handleProceedCheckout = () => {
        cart.length === 0 ? alert('Please! Continue shopping after follow this way.') : history.push('/checkout');
    }

    return (
        <Container>
            <div className="review-main">
                <div className="prod-review-control">
                    <div className="hheader">
                        <h1>
                            <span>Your wishlist products</span>
                            <span className="items">({userCart.length}) Items</span>
                        </h1>
                    </div>

                    {
                        cartProduct.length === 0 ?
                            /* Empty content styles */
                            <div className="empty-default">
                                <img src={EmptyCartImg} alt="" />
                                <h1>Horray! Your current wishlist is empty. . . . .!!</h1>
                                <Link to="/home">
                                    <button>Continue Shopping</button>
                                </Link>
                            </div> :
                            <div className="review-products">
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
                    }
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