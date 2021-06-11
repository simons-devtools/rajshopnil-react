import React from 'react';
import HolderImage from '../../images/icons/loading.gif';
import { Link } from 'react-router-dom';
import './CollectionTwo.css';

const CollectionTwo = (props) => {
    const { group, category, name, photoUrl } = props.twoCollection;

    return (
        <Link to={`${group}/${category}`}>
            <div className="collection-two-wrapper">
                <div className="click-handler">
                    <div className="collection-two">
                        {
                            photoUrl !== '' ? <img src={photoUrl} alt="product-img" /> : <img src={HolderImage} alt="loading-img"/>
                        }
                        <h4>{name}</h4>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CollectionTwo;