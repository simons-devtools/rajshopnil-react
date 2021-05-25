import React from 'react';
import HolderImage from '../../images/icons/loading.gif';
import { Link } from 'react-router-dom';
import './CollectionThree.css';

const CollectionThree = (props) => {
    const { name, photoUrl, group, category } = props.threeCollection;

    return (
        <Link to={`${group}/${category}`}>
            <div className="collection-three-wrapper">
                <div className="click-handler">
                    <div className="collection-three">
                        {
                            photoUrl !== '' ? <img src={photoUrl} /> : <img src={HolderImage} />
                        }
                        <h4>{name}</h4>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CollectionThree;