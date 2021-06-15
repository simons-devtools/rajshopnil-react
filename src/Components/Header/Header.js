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

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userCart, setUserCart] = useContext(UserCartContext);
    const { isSiggedIn, photo } = loggedInUser;

    function loggedOutBtn() {
        let newCart;
        let currentCart = [...userCart];
        newCart = currentCart;
        newCart.length = 0;

        setUserCart(newCart);
        setLoggedInUser({});
    }

    // For Humbarger Menubar:
    // const hamburger = document.querySelector(".hamburger");
    // const navMenu = document.querySelector(".nav-menu");
    // hamburger.addEventListener("click", mobileMenu);

    // function mobileMenu() {
    //     hamburger.classList.toggle("active");
    //     navMenu.classList.toggle("active");
    // }

    // Handle Close Button:
    // const navLink = document.querySelectorAll(".nav-link");
    // navLink.forEach(n => n.addEventListener("click", closeMenu));

    // function closeMenu() {
    //     hamburger.classList.remove("active");
    //     navMenu.classList.remove("active");
    // }

    return (
        <div className="navbar-head">

            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <div className="topbar">
                <p>
                    <span>Authorized by mr. simon</span>
                    <span>Mobile: +880 1799867752</span>
                    <span>Email: cmoxsh@gmail.com</span>
                    <span>Root: Gazipur, Dhaka, Bangladesh</span>
                </p>
            </div>

            <header>
                <Container>
                    <nav className="navbar">
                        <div className="logos">
                            <Link to="/home" className="nav-logo">DevTools</Link>
                        </div>
                        <div className="search-container">
                            <Search />
                        </div>
                        <div>
                            <ul className="nav-menu">
                                <Link to="/home" className="nav-link">
                                    <li className="nav-item"><NotificationsActiveRoundedIcon /></li>
                                </Link>
                                <Link to="/home" className="nav-link">
                                    <li className="nav-item"><FavoriteRoundedIcon /></li>
                                </Link>
                                <Link to="/review" refresh="true" className="count-cart">
                                    <li className="nav-item">
                                        <ShoppingBasketIcon />
                                        <span className="cart-count">{userCart.length > 0 ? userCart.length : 0}</span>
                                    </li>
                                </Link>
                                <li className="nav-item profile-photo">
                                    {isSiggedIn === true ? <img src={photo} alt="profile-img" /> : <span className="profile"><AccountCircleRoundedIcon /></span>}
                                </li>
                            </ul>
                        </div>
                    </nav>
                </Container>
            </header>


            <div className="hheaderr">
                <Container className="header">
                    <nav className="navbar">
                        <ul className="nav-menu">
                            <Link to="/home" refresh="true">
                                <li className="nav-item">Home</li>
                            </Link>
                            <Link to="/home" refresh="true">
                                <li className="nav-item">Docs</li>
                            </Link>
                            <Link to="/home" refresh="true">
                                <li className="nav-item">Services</li>
                            </Link>
                            <Link to="/home" refresh="true">
                                <li className="nav-item">About</li>
                            </Link>
                            <Link to="/home" refresh="true">
                                <li className="nav-item">Add-product</li>
                            </Link>
                            <Link to="/home" refresh="true">
                                <li className="nav-item">Product-Detail</li>
                            </Link>
                            <Link to="/home" refresh="true">
                                <li className="nav-item">Checkout</li>
                            </Link>
                            <Link to="/home" refresh="true">
                                <li className="nav-item">Payment</li>
                            </Link>
                            <Link to="/home" refresh="true">
                                <li className="nav-item">Dashboard</li>
                            </Link>
                            <li className="nav-item">
                                {
                                    isSiggedIn ? <strong onClick={loggedOutBtn} style={{ fontSize: '14px', cursor: 'pointer' }}>Logout</strong> : <Link to="/login" className="nav-link">Login</Link>
                                }
                            </li>
                        </ul>
                        {/* BAR... */}
                    </nav>
                </Container>
            </div>

        </div >
    );
};

export default Header;