import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionFive.css';

const CollectionFive = (props) => {
    const { group, category, name, photoUrl } = props.fiveCollection;

    return (
        <Link to={`${group}/${category}`}>
            <div className="collection-five-wrapper">
                <div className="click-handler">
                    <div className="collection-five">
                        <img src={photoUrl} alt="" />
                        <h4>{name}</h4>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CollectionFive;