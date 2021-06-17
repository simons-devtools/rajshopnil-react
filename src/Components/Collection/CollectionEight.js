import React from 'react';
import './CollectionStyle.css';
import HolderImage from '../../images/icons/loading.gif';
import { Link } from 'react-router-dom';

const CollectionEight = (props) => {
    const { group, category, photoUrl } = props.eightCollection;

    return (
        <Link to={`${group}/${category}`}>
            <div className="collection-eight">
                {
                    photoUrl !== '' ? <img src={photoUrl} alt="product-img" /> : <img src={HolderImage} alt="loading-img" />
                }
            </div>
        </Link>
    );
};

export default CollectionEight;