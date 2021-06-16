import React, { useEffect, useState } from 'react';
import Loading from '../../images/icons/loading.gif';
import Product from './Product';
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
        <Container>
            <div style={{ margin: '30px 0' }}>
                <h1>Our all <span style={{ color: 'tomato' }}>'{category}'</span> category products is below</h1>
                {
                    products.length <= 0 ? <img src={Loading} className="loading" alt="loading-img" /> :
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            {
                                products.map(prod => prod.category === category ? <Product product={prod} key={prod.key} /> : '')
                            }
                        </div>
                }
            </div>
        </Container>
    );
};

export default CategoryProducts;