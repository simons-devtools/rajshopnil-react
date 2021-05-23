import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionEight.css';

const CollectionEight = (props) => {
    const { group, category, photoUrl } = props.eightCollection;

    return (
        <Link to={`${group}/${category}`}>
            <div className="collection-eight-wrapper">
                <div className="click-handler">
                    <div className="collection-eight">
                        <img src={photoUrl} alt="" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CollectionEight;