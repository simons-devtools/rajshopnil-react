import React from 'react';
import HolderImage from '../../images/icons/loading.gif';
import { Link } from 'react-router-dom';
import './CollectionSeven.css';

const CollectionSeven = (props) => {
    const { group, category, name, photoUrl } = props.sevenCollection;

    return (
        <Link to={`${group}/${category}`}>
            <div className="collection-seven-wrapper">
                <div className="click-handler">
                    <div className="collection-seven">
                        {
                            photoUrl !== '' ? <img src={photoUrl} alt="product-img" /> : <img src={HolderImage} alt="loading-img" />
                        }
                        <h4>{name}</h4>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CollectionSeven;