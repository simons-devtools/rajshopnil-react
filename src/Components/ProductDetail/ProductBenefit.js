import React from 'react';
import './ProductBenefit.css';
import InfoIcon from '@material-ui/icons/Info';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import EcoIcon from '@material-ui/icons/Eco';
import ForumIcon from '@material-ui/icons/Forum';
import { Link } from 'react-router-dom';

const ProductBenefit = () => {
    return (
        <>
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
                        <Link to="/home">
                            <h4>GO TO STORAGE</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductBenefit;