import React from 'react';
import './CollectionStyle.css';
import { Link } from 'react-router-dom';

const CollectionSix = (props) => {
    const { group, category, name, photoUrl } = props.sixCollection;

    return (
        <Link to={`${group}/${category}`}>
            <div className="collection-six">
                <img src={photoUrl} alt="product-img" />
                <h4>{name}</h4>
            </div>
        </Link>
    );
};

export default CollectionSix;