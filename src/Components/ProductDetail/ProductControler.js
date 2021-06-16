import React from 'react';
import './ProductControler.css';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

const ProductControler = (props) => {
    const { product, addToCartHandler } = props;
    const { name, price, category, seller } = product;

    return (
        <div className="product-detail-info">
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
    );
};

export default ProductControler;