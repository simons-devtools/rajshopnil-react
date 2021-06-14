import React from 'react';
import HolderImage from '../../images/icons/loading.gif';
import { Link } from 'react-router-dom';
import './CollectionOne.css';

const CollectionOne = (props) => {
    // console.log('Data', props.oneCollection);
    const { category, name, photoUrl } = props.oneCollection;

    return (
        <Link to={`/product-collection/${category}`}>
            <div className="collection-one-wrapper">
                <div className="click-handler">
                    <div className="collection-one">
                        {
                            photoUrl === '' ? <img src={HolderImage} alt="product-img" /> : <img src={photoUrl} alt="product-img" />
                        }
                        <h4>{name}</h4>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CollectionOne;