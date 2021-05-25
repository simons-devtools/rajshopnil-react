import './Header.css';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Container } from '@material-ui/core';
import { UserContext } from '../../App';
import { UserCartContext } from '../../App';
import Search from '../Search/Search';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userCart, setUserCart] = useContext(UserCartContext);
    const { isSiggedIn, photo } = loggedInUser;

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

            <div className="topbar">
                <p>
                    <span>Authorized by mr. simon | </span>
                    <span>Mobile: +880 1799867752 | </span>
                    <span>Email: cmoxsh@gmail.com | </span>
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
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link"><NotificationsActiveRoundedIcon /></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/home" className="nav-link"><FavoriteRoundedIcon /></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/review" refresh="true" className="nav-link count-cart">
                                    <ShoppingBasketIcon />
                                    <span className="cart-count">{userCart.length > 0 ? userCart.length : 0}</span>
                                </Link>
                            </li>
                            <li className="nav-item profile-photo">
                                {isSiggedIn === true ? <img src={photo} /> : <span className="nav-link profile"><AccountCircleRoundedIcon /></span>}
                            </li>
                        </ul>
                    </nav>
                </Container>
            </header>


            <div className="hheaderr">
                <Container className="header">
                    <nav className="navbar">
                        <ul className="nav-menu">
                            <li className="">
                                <Link to="/home" refresh="true" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">Docs</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addProducts" className="nav-link">Add-Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">Product-Detail</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/checkout" className="nav-link">Checkout</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/payment" className="nav-link">Payment</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                        </ul>
                        <div className="hamburger">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </nav>
                </Container>
            </div>

        </div>
    );
};

export default Header;