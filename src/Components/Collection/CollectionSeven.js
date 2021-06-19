import React from 'react';
import './CollectionStyle.css';
import { Link } from 'react-router-dom';

const CollectionSeven = (props) => {
    const { group, category, name, photoUrl } = props.sevenCollection;

    return (
        <Link to={`${group}/${category}`}>
            <div className="collection-four">
                <img src={photoUrl} alt="product-img" />
                <h4>{name}</h4>
            </div>
        </Link>
    );
};

export default CollectionSeven;