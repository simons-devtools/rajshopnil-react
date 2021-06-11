import React from 'react';
import HolderImage from '../../images/icons/loading.gif';
import { Link } from 'react-router-dom';
import './CollectionFour.css';

const CollectionFour = (props) => {
    const { group, category, name, photoUrl } = props.fourCollection;

    return (
        <Link to={`${group}/${category}`}>
            <div className="collection-four-wrapper">
                <div className="click-handler">
                    <div className="collection-four">
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

export default CollectionFour;