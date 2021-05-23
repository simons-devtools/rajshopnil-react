import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionTwo.css';

const CollectionTwo = (props) => {
    const { group, category, name, photoUrl } = props.twoCollection;

    return (
        <Link to={`${group}/${category}`}>
            <div className="collection-two-wrapper">
                <div className="click-handler">
                    <div className="collection-two">
                        <img src={photoUrl} alt="" />
                        <h4>{name}</h4>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CollectionTwo;