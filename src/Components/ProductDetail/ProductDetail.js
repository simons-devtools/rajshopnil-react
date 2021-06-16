import './ProductDetail.css';
import React, { useContext, useEffect, useState } from 'react';
import HolderImage from '../../images/icons/loading.gif';
import { useHistory, useParams } from 'react-router';
import { Container } from '@material-ui/core';
import { UserCartContext, UserContext } from '../../App';
import ProductBenefit from './ProductBenefit';
import ProductFeature from './ProductFeature';
import ProductControler from './ProductControler';

const ProductDetail = () => {
    document.title = 'DevTools | Products Details';
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
                        postCartData(product);
                    }
                    else {
                        const toBeAddedKey = product.key;
                        let sameProduct = data.find(pd => pd.product.key === toBeAddedKey);
                        if (sameProduct) {
                            alert('You are allready added this product! Please check your cart OR try to another product.....!!');
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
        fetch('http://localhost:5200/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                alert('Congratulation! You are added this product of your cart.....!!');
            })
    }

    return (
        <Container>
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