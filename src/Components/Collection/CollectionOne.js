import React from 'react';
import './CollectionStyle.css';
import { Link } from 'react-router-dom';

const CollectionOne = (props) => {
    const { category, name, photoUrl } = props.oneCollection;

    return (
        <Link to={`/product-collection/${category}`}>
            <div className="collection-six">
                <img src={photoUrl} alt="product-img" />
                <h4>{name}</h4>
            </div>
        </Link>
    );
};

export default CollectionOne;