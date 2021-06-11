import './CategoryProducts.css';
import React, { useEffect, useState } from 'react';
import Loading from '../../images/icons/loading.gif';
import Product from '../Product/Product';
import { Container } from '@material-ui/core';
import { useParams } from 'react-router';

const CategoryProducts = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    // const item = products.find(item => item.category === category);

    // Single product details handler:
    useEffect(() => {
        fetch('http://localhost:5200/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div>
            <Container className="category-prod">
                <h1>Our all <span style={{ color: 'tomato' }}>"{category}"</span> category products is below</h1>
                <div className="product-collection">
                    {
                        products.length <= 0 && <img style={{ marginLeft: '35%' }} src={Loading} alt="loading-img" />
                    }
                    {
                        products.map(prod => prod.category === category ? <Product product={prod} key={prod.key} /> : '')
                    }
                </div>
            </Container>
        </div>
    );
};

export default CategoryProducts;