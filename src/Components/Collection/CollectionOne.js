import React from 'react';
import './CollectionStyle.css';
import HolderImage from '../../images/icons/loading.gif';
import { Link } from 'react-router-dom';

const CollectionOne = (props) => {
    const { category, name, photoUrl } = props.oneCollection;

    return (
        <Link to={`/product-collection/${category}`}>
            <div className="collection-six">
                {
                    photoUrl === '' ? <img src={HolderImage} alt="product-img" /> : <img src={photoUrl} alt="product-img" />
                }
                <h4>{name}</h4>
            </div>
        </Link>
    );
};

export default CollectionOne;