import './ProductDetail.css';
import React, { useContext, useEffect, useState } from 'react';
import HolderImage from '../../images/icons/loading.gif';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import InfoIcon from '@material-ui/icons/Info';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import EcoIcon from '@material-ui/icons/Eco';
import ForumIcon from '@material-ui/icons/Forum';
import StarIcon from '@material-ui/icons/Star';
import { useHistory, useParams } from 'react-router';
import { Container } from '@material-ui/core';
import { UserContext } from '../../App';

const ProductDetail = () => {
    document.title = 'DevTools | Products Details';
    const { prodKey } = useParams();
    const [product, setProduct] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { name, price, photoUrl, category, seller } = product;

    // Single product find by key:
    useEffect(() => {
        fetch('http://localhost:5200/products')
            .then(res => res.json())
            .then(data => {
                const newData = data.find(pd => pd.key === prodKey);
                // console.log(newData);
                setProduct(newData);
            })
    }, [prodKey])

    // New cart product post to the mongodb cloud:
    const history = useHistory();
    const addToCartHandler = (product) => {
        if (loggedInUser.isSiggedIn !== true) {
            history.push('/login');
        }
        else {
            fetch('http://localhost:5200/bookings?email=' + loggedInUser.email, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('Cart data', data);
                    if (data.length === 0) {
                        let newBooking = { ...loggedInUser, product };
                        fetch('http://localhost:5200/addBooking', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(newBooking)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log('MDB First Cart Product Added', data);
                            })
                    }
                    else {
                        const toBeAddedKey = product.key;
                        let sameProduct = data.find(pd => pd.product.key === toBeAddedKey);
                        if (sameProduct) {
                            console.log("You are allready added this product!")
                        }
                        else {
                            let newBooking = { ...loggedInUser, product };
                            fetch('http://localhost:5200/addBooking', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(newBooking)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log('MDB Second Cart Product Added', data);
                                })
                        }
                    }
                });
        }
    }








    // Cart database filter func:
    // const addToCartHandler = (product) => {}
    // const addToCartHandler = (product) => { //EventHandler Line
    //     // console.log('Product Added', product);
    //     const toBeAddedKey = product.key;
    //     const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
    //     let count = 1;
    //     let newCart;
    //     if (sameProduct) {
    //         count = sameProduct.quantity + 1;
    //         sameProduct.quantity = count;
    //         const others = cart.filter(pd => pd.key !== toBeAddedKey);
    //         newCart = [...others, sameProduct];
    //     }
    //     else {
    //         product.quantity = 1;
    //         newCart = [...cart, product];
    //     }
    //     setCart(newCart);
    //     addToDatabaseCart(toBeAddedKey, count);
    // }

    return (
        <Container>
            <div className="product-detail-container">

                <div className="products-details">
                    <div className="product-wrapper">

                        {/* Colum no 01 styles */}
                        <div className="image-layout">
                            <div className="big-photo">
                                {
                                    photoUrl !== '' ? <img src={photoUrl} /> : <img src={HolderImage} />
                                }
                            </div>
                            <div className="small-photo">
                                <img src={photoUrl} alt="" />
                                <img src={HolderImage} alt="" />
                                <img src={photoUrl} alt="" />
                                <img src={HolderImage} alt="" />
                            </div>
                        </div>

                        {/* Colum no 02 styles */}
                        <div className="product-info">
                            <div className="prod-first-row">
                                <h2>{name}</h2>
                                <div className="social-madia">
                                    <div className="left-content">
                                        <p>
                                            <span className="star"><StarIcon /></span>
                                            <span className="star"><StarIcon /></span>
                                            <span className="star"><StarIcon /></span>
                                            <span className="star"><StarIcon /></span>
                                            <span className="star"><StarIcon /></span>
                                            <span className="rating">5 Ratings</span>
                                        </p>
                                    </div>
                                    <div className="right-content">
                                        <span className="sharee"><ShareIcon /></span>
                                        <span className="lovee"><FavoriteBorderIcon /></span>
                                    </div>
                                </div>
                                <div className="brand-content">
                                    <span>
                                        <strong className="brand">Brand: </strong>
                                        <span className="providerr">{category} | </span>
                                    </span>
                                    <span>Seller: </span>
                                    <span style={{ color: 'blue' }}>{seller}</span>
                                </div>
                            </div>

                            <div className="prod-second-row">
                                <div className="price">
                                    <h1>${price}</h1>
                                    <h4>
                                        <span className="strech">$30 </span>
                                        <span> -50%</span>
                                    </h4>
                                </div>
                                <div className="promotions">
                                    <span className="promoLeft">Promotions</span>
                                    <span className="promoRight">Min. $500 - $1000 must</span>
                                </div>
                                <div className="stock-content">
                                    <p>
                                        <span className="stockLeft">Stock </span>
                                        <span className="stockRight green">Available in 0 stock</span>
                                        {/* <span className="stockRight red">Out of stock</span> */}
                                    </p>
                                </div>
                                <div className="prod-handler">
                                    <button className="add-buy-btn">Buy now</button>
                                    <button onClick={() => addToCartHandler(product)} className="add-cart-btn">Add Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products summary layout */}
                    <div>
                        <h1>Products features is comming soon. . .!!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum rem veritatis asperiores reprehenderit cupiditate, aliquid quidem tempora dolor. Numquam temporibus rem, eius laboriosam nemo accusantium ipsum soluta unde libero. Temporibus eveniet, iure assumenda corporis iusto odit vero odio consectetur quam modi doloribus nostrum exercitationem distinctio, aliquid rerum perspiciatis amet provident? Repellat, sit veniam commodi sed at voluptate amet culpa excepturi, magnam eum consequatur, necessitatibus voluptatibus quod temporibus molestiae ipsa nisi illum molestias ducimus porro nihil impedit ipsam! Similique, ipsam? Dolores optio illum a ipsam laborum qui dicta, perspiciatis doloremque deleniti, quae sunt cumque veniam? Eaque culpa rerum iure accusamus officia!</p>
                        {/* <p>{features}</p> */}
                        <br />
                        <br />
                        <h2>Product summary is below:</h2>
                        <ul>
                            <li>Product feature one</li>
                            <li>Product feature two</li>
                            <li>Product feature three</li>
                            <li>Product feature four</li>
                            <li>Product feature five</li>
                        </ul>
                    </div>
                </div>

                {/* Colum no 03 styles */}
                <div className="other-info">
                    <div className="other-row-one">
                        <div className="row-one">
                            <p>
                                <small className="del-option">Delivery Options</small>
                                <span className="icon-right"><InfoIcon /></span>
                            </p>
                            <h4>
                                <span className="icon-left"><LocationOnIcon /></span>
                                <span>Dhaka, Gazipur, Tongi</span>
                                <span className="right-link">CHANGE</span>
                            </h4>
                        </div>
                        <div className="row-two">
                            <div className="row-two-one">
                                <h4>
                                    <span className="icon-left"><HomeWorkIcon /></span>
                                    <span>Home Delevery</span>
                                    <span className="right-amount">$15</span>
                                </h4>
                                <p><small>4 - 7 days</small></p>
                            </div>
                            <div className="row-two-two">
                                <h4>
                                    <span className="icon-left"><LocalAtmIcon /></span>
                                    <span>Cash on Delevery Available</span>
                                </h4>
                            </div>
                        </div>
                        <div className="row-three">
                            <div className="row-three-one">
                                <p>
                                    <small>Return & Warranty</small>
                                    <small className="icon-right"><InfoIcon /></small>
                                </p>
                                <h4>
                                    <span className="icon-left"><AssignmentReturnIcon /></span>
                                    <span>7 Days Returns</span>
                                </h4>
                                <p><small>Change of mind is not applicable</small></p>
                            </div>
                            <div className="row-three-one">
                                <h4>
                                    <span className="icon-left"><EcoIcon /></span>
                                    <span>Warranty not available</span>
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Middle Piont */}
                    <div className="other-row-two">
                        <div className="other-one">
                            <div className="flexible">
                                <p><small>Sold by</small></p>
                                <h4>Microsoft Corporation</h4>
                            </div>
                            <div className="flexible">
                                <p>
                                    <span className="chat"><ForumIcon /></span>
                                    <span className="chat">Chat Now</span>
                                </p>
                            </div>
                        </div>
                        <div className="other-two">
                            <div className="flexColums-one">
                                <p><small>Positive Seller Rating</small></p>
                                <h2>77%</h2>
                            </div>
                            <div className="flexColums-two">
                                <p><small>Ship on Time</small></p>
                                <h2>96%</h2>
                            </div>
                            <div className="flexColums-three">
                                <p><small>Chat Response Rate</small></p>
                                <p><small>not enough data</small></p>
                            </div>
                        </div>
                        <div className="other-three">
                            <h4>GO TO STORAGE</h4>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProductDetail;