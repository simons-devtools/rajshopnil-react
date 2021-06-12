import React from 'react';
import { Link } from 'react-router-dom';
import NoMatchImg from '../../images/icons/404.svg';

const NotFound = () => {
    const noMatchStyles = {
        height: '260px',
        margin: '20px 0 10px 0'
    };

    const btnStyles = {
        width: '200px',
        fontSize: '16px',
        border: 'none',
        padding: '10px',
        letterSpacing: '3px',
        cursor: 'pointer'
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <img src={NoMatchImg} alt="404-page-img" style={noMatchStyles} />
            </div>
            <div>
                <h1 style={{ letterSpacing: '3px', color: 'red', margin: '10px 0' }}>
                    <strong>Something is wrong! Page not found, Please try again letter.</strong>
                </h1>
                <Link to="/home">
                    <button style={btnStyles}>Back to home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;