import React from 'react';
import './CollectionStyle.css';
import HolderImage from '../../images/icons/loading.gif';
import { Link } from 'react-router-dom';

const CollectionTwo = (props) => {
    const { group, category, name, photoUrl } = props.twoCollection;

    return (
        <Link to={`${group}/${category}`}>
            <div className="collection-six">
                {
                    photoUrl !== '' ? <img src={photoUrl} alt="product-img" /> : <img src={HolderImage} alt="loading-img" />
                }
                <h4>{name}</h4>
            </div>
        </Link>
    );
};

export default CollectionTwo;