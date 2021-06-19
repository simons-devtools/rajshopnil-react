import React from 'react';
import './CollectionStyle.css';
import { Link } from 'react-router-dom';

const CollectionFive = (props) => {
    const { group, category, name, photoUrl } = props.fiveCollection;

    return (
        <Link to={`${group}/${category}`}>
            <div className="collection-five">
                <img src={photoUrl} alt="product-img" />
                <h4>{name}</h4>
            </div>
        </Link>
    );
};

export default CollectionFive;