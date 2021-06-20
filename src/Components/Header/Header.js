import './Header.css';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Container } from '@material-ui/core';
import { UserContext, UserCartContext } from '../../App';
import Search from '../Search/Search';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userCart, setUserCart] = useContext(UserCartContext);

    function loggedOutBtn() {
        let newCart;
        let savedCart;

        // For empty the wishlist count:
        let currentCart = [...userCart];
        newCart = currentCart;
        newCart.length = 0;
        setUserCart(newCart);

        // For empty the cart:
        savedCart = getDatabaseCart();
        savedCart.length = 0;
        addToDatabaseCart(savedCart);

        setLoggedInUser({});
    }

    // Humbarger/media-query toggle menu button:
    function toggleBtn() {
        const modalContent = document.getElementById("modalContent");
        modalContent.style.display = "block";
    }

    return (
        <header>
            {/* Navbar top contents */}
            <div className="topbar">
                <Container>
                    <p>
                        <span>Authorized by mr. simon</span>
                        <span>Mobile: +880 1799867752</span>
                        <span>Email: cmoxsh@gmail.com</span>
                        <span>Root: Gazipur, Dhaka, Bangladesh</span>
                    </p>
                </Container>
            </div>

            <nav>
                <Container>
                    {/* Toggle/mediaQ navbar */}
                    <div onClick={toggleBtn} className="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                    {/* Navbar middle contents */}
                    <div className="navbar-one">
                        <div className="logos">
                            <Link to="/home">Rajshopnil</Link>
                        </div>
                        <div>
                            <Search />
                        </div>
                        <ul className="nav-menu-one">
                            <Link to="/home">
                                <li className="nav-item"><NotificationsActiveRoundedIcon className="icons" /></li>
                            </Link>
                            <Link to="/home">
                                <li className="nav-item"><FavoriteRoundedIcon className="icons" /></li>
                            </Link>
                            <Link to="/review" refresh="true" className="count-cart">
                                <li className="nav-item cartt">
                                    <ShoppingBasketIcon />
                                    <span className="cart-count">{userCart.length > 0 ? userCart.length : 0}</span>
                                </li>
                            </Link>
                            <li className="nav-item profile-photo">
                                {loggedInUser.isSiggedIn ? <img src={loggedInUser.photo} alt="profile" /> : <span><AccountCircleRoundedIcon className="icons" /></span>}
                            </li>
                        </ul>
                    </div>

                    {/* Navbar Bottom contents */}
                    <div className="navbar-two">
                        <ul id="modalContent" className="nav-menu-two">
                            <Link to="/home" refresh="true">
                                <li className="nav-link">Home</li>
                            </Link>
                            <Link to="/home" refresh="true">
                                <li className="nav-link">Docs</li>
                            </Link>
                            <Link to="/home" refresh="true">
                                <li className="nav-link">Services</li>
                            </Link>
                            <Link to="/home" refresh="true">
                                <li className="nav-link">About</li>
                            </Link>
                            <Link to="/home" refresh="true">
                                <li className="nav-link">Add-product</li>
                            </Link>
                            <Link to="/home" refresh="true">
                                <li className="nav-link">Product-Detail</li>
                            </Link>
                            <Link to="/home" refresh="true">
                                <li className="nav-link">Checkout</li>
                            </Link>
                            <Link to="/home" refresh="true">
                                <li className="nav-link">Payment</li>
                            </Link>
                            <Link to="/home" refresh="true">
                                <li className="nav-link">Dashboard</li>
                            </Link>
                            <li className="nav-link">
                                {
                                    loggedInUser.isSiggedIn ?
                                        <strong onClick={loggedOutBtn} style={{ fontSize: '14px', cursor: 'pointer' }}>Logout</strong> :
                                        <Link to="/login" className="nav-link">Login</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </Container>

            </nav>
        </header >
    );
};

export default Header;