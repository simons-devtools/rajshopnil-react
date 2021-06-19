import React from 'react';
import './CollectionStyle.css';
import { Link } from 'react-router-dom';

const CollectionThree = (props) => {
    const { name, photoUrl, group, category } = props.threeCollection;

    return (
        <Link to={`${group}/${category}`}>
            <div className="collection-five">
                <img src={photoUrl} alt="product-img" />
                <h4>{name}</h4>
            </div>
        </Link>
    );
};

export default CollectionThree;