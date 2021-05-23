import './CategoryProducts.css';
import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
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
                        products.length === 0 && <h1 style={{ textAlign: 'center', fontSize: '30px', color: 'tomato' }}>Loading...</h1>
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