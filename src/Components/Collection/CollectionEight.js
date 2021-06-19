import React from 'react';
import './CollectionStyle.css';
import { Link } from 'react-router-dom';

const CollectionEight = (props) => {
    const { group, category, photoUrl } = props.eightCollection;

    return (
        <Link to={`${group}/${category}`}>
            <div className="collection-eight">
                <img src={photoUrl} alt="product-img" />
            </div>
        </Link>
    );
};

export default CollectionEight;