import './ProductDetail.css';
import React, { useContext, useEffect, useState } from 'react';
import HolderImage from '../../images/icons/loading.gif';
import { useHistory, useParams } from 'react-router';
import { Container } from '@material-ui/core';
import { UserCartContext, UserContext } from '../../App';
import ProductBenefit from './ProductBenefit';
import ProductFeature from './ProductFeature';
import ProductControler from './ProductControler';
import AlertWarning from './AlertWarning';
import AlertSuccess from './AlertSuccess';

const ProductDetail = () => {
    document.title = 'Rajshopnil | Products Detail Page';
    const history = useHistory();
    const { prodKey } = useParams();
    const [product, setProduct] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userCart, setUserCart] = useContext(UserCartContext);

    // Single product find by key:
    useEffect(() => {
        fetch('http://localhost:5200/products')
            .then(res => res.json())
            .then(data => {
                const newData = data.find(pd => pd.key === prodKey);
                // console.log(newData);
                if (newData) {
                    setProduct(newData);
                } else {
                    alert('Something is wrong. Please try again latter.');
                }
            })
    }, [prodKey])

    // New cart product post to the mongodb cloud:
    const addToCartHandler = (product) => {
        if (loggedInUser.isSiggedIn !== true) {
            history.push('/login');
        }
        else {
            fetch('http://localhost:5200/wishlist?email=' + loggedInUser.email, {
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
                        postCartData(product);
                    }
                    else if (data.length > 4) {
                        alert('Sorry bro! We cannot provid you more than 5 products for your wishlist. Please arrangement your cart.');
                        history.push('/review');
                    }
                    else {
                        const toBeAddedKey = product.key;
                        let sameProduct = data.find(pd => pd.product.key === toBeAddedKey);
                        if (sameProduct) {
                            const alertWarning = document.querySelector(".alert-warning");
                            alertWarning.style.display = "block";
                            const alertSuccess = document.querySelector(".alert-success");
                            alertSuccess.style.display = "none";
                        }
                        else {
                            postCartData(product);
                        }
                    }
                    setUserCart(data);
                });
        }
    }

    // Post user new cart product func:
    const postCartData = (product) => {
        let newBooking = { ...loggedInUser, product };
        fetch('https://rajshopnilserver.herokuapp.com/addWishlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                const alertSuccess = document.querySelector(".alert-success");
                alertSuccess.style.display = "block";
            })
    }

    return (
        <Container>
            {/* Alert messages contents */}
            <div>
                <div className="alert-warning">
                    <AlertWarning />
                </div>
                <div className="alert-success">
                    <AlertSuccess />
                </div>
            </div>

            {/* Main contents */}
            <div className="product-detail-container">

                <div className="products-details">
                    <div className="product-wrapper">
                        {/* Products Images Contents */}
                        <div className="image-layout">
                            <div className="big-photo">
                                {
                                    product.photoUrl ? <img src={product.photoUrl} alt="product-img" /> : <img src={HolderImage} alt="loading-img" />
                                }
                            </div>
                            <div className="small-photo">
                                <img src={product.photoUrl} alt="product-img" />
                                <img src={HolderImage} alt="product-sub-img" />
                                <img src={product.photoUrl} alt="product-img" />
                                <img src={HolderImage} alt="product-sub-img" />
                            </div>
                        </div>

                        {/* Products Controler Contents */}
                        <div className="product-info">
                            <ProductControler
                                product={product}
                                addToCartHandler={addToCartHandler}
                            />
                        </div>
                    </div>

                    {/* Products Feature Contents */}
                    <div className="product-features">
                        <ProductFeature />
                    </div>
                </div>

                {/* Product Benefit Contents */}
                <div className="product-customer-info">
                    <ProductBenefit product={product} />
                </div>
            </div>
        </Container>
    );
};

export default ProductDetail;