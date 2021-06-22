import React, { useEffect, useState } from 'react';
import Loading from '../../images/icons/loading.gif';
import CategorySidebar from './CategorySidebar';
import Product from './Product';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { Container } from '@material-ui/core';
import { useParams } from 'react-router';

const CategoryProducts = () => {
    document.title = 'Rajshopnil | All categories products Page';
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    // const item = products.find(item => item.category === category);

    // Single product details handler:
    useEffect(() => {
        fetch('https://rajshopnilserver.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    // Products specific cateories length:
    let categoryLength = products.filter(cat => cat.category === category);

    return (
        <Container>
            <div className="categories-page">
                <div className="sidebar-contents">
                    <CategorySidebar />
                </div>

                <div className="products-contents">
                    <h1>
                        <span>All '{category}' category products is below</span>
                        <span className="item">({categoryLength.length})Iteams</span>
                    </h1>
                    {
                        products.length <= 0 ? <img src={Loading} className="loading" alt="loading-img" /> :
                            <div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                    {
                                        products.map(prod => prod.category === category ? <Product product={prod} key={prod.key} /> : '')
                                    }
                                </div>
                                <div className="explore-btn">
                                    <button>See More <DoubleArrowIcon className="icons" /></button>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </Container>
    );
};

export default CategoryProducts;