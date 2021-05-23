import { Container } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>

            <Container className="footer-form">
                <span className="footer-text">Stay updated on special offers, design trends, and more</span>
                <input type="email" placeholder="Email Address. . ." className="email-input" />
                <input type="submit" value="Sign up now" className="sign-btn" />
            </Container>
            <div className="footer-background">
                <Container>
                    <div className="footer-flexbox">
                        <div className="footer-logo">
                            <h2><a href="/">DEVTOOLS</a></h2>
                            {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nesciunt.</p> */}
                        </div>
                        <div className="footer-menus">
                            <ul>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Privacy Policy FAQs</a></li>
                                <li><a href="/">Terms of Use</a></li>
                                <li><a href="/">Do Not Sell My Personal Information</a></li>
                                <li><a href="/">Request Personal Information</a></li>
                            </ul>
                        </div>
                        <div className="footer-menus">
                            <ul>
                                <li><a href="/">Contact Me</a></li>
                                <li><a href="/">Help Center</a></li>
                                <li><a href="/">Track Your Order</a></li>
                                <li><a href="/">Start A Return</a></li>
                                <li><a href="/">Email Preferences</a></li>
                            </ul>
                        </div>
                        <div className="footer-menus">
                            <ul>
                                <li><strong>Customer Service</strong></li>
                                <li>Sat - Thu: 9 am - 10 pm BD</li>
                                <li>Friday: Closed</li>
                                <li>Root# Gazipur, Dhaka</li>
                            </ul>
                        </div>
                    </div>
                    <div className="social-icon-list">
                        <ul>
                            <li><a href="/"><FacebookIcon /></a></li>
                            <li><a href="/"><TwitterIcon /></a></li>
                            <li><a href="/"><YouTubeIcon /></a></li>
                            <li><a href="/"><InstagramIcon /></a></li>
                        </ul>
                    </div>
                </Container>
            </div>
            <div className="footer-end">
                <p>&copy; Copyright 2020-2021, Devtools Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;