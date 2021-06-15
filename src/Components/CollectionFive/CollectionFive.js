import React from 'react';
import '../Home/CollectionStyle.css';
import HolderImage from '../../images/icons/loading.gif';
import { Link } from 'react-router-dom';

const CollectionFive = (props) => {
    const { group, category, name, photoUrl } = props.fiveCollection;

    return (
        <Link to={`${group}/${category}`}>
            <div className="collection-five">
                {
                    photoUrl !== '' ? <img src={photoUrl} alt="product-img" /> : <img src={HolderImage} alt="loading-img" />
                }
                <h4>{name}</h4>
            </div>
        </Link>
    );
};

export default CollectionFive;