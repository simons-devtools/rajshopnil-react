import React from 'react';
import HolderImage from '../../images/icons/loading.gif';
import { Link } from 'react-router-dom';
import './CollectionEight.css';

const CollectionEight = (props) => {
    const { group, category, photoUrl } = props.eightCollection;

    return (
        <Link to={`${group}/${category}`}>
            <div className="collection-eight-wrapper">
                <div className="click-handler">
                    <div className="collection-eight">
                        {
                            photoUrl !== '' ? <img src={photoUrl} /> : <img src={HolderImage} />
                        }
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CollectionEight;