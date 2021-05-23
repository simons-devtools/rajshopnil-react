import React from 'react';
import './UserAccount.css';
import UserPhoto from '../../images/product-pic/prod-sample.jpg';
import Facebook from '../../images/icons/facebook.png';
import Google from '../../images/icons/google.png';
import Drible from '../../images/icons/group.png';

const UserAccount = () => {
    return (
        <div>
            <h1>Your online DevTools account setting</h1>
            <div className="user-layout">
                <div className="card">
                    <img src={UserPhoto} alt="user-alt" className="user-avater" />
                    <h1>John Doe</h1>
                    <p className="title">Web developer</p>
                    <p>Harvard University</p>
                    <div style={{ margin: '24px 0' }}>
                        <a href="/"><img src={Facebook} alt="icon-alt"/></a>
                        <a href="/"><img src={Google} alt="icon-alt"/></a>
                        <a href="/"><img src={Drible} alt="icon-alt"/></a>
                    </div>
                    <p><button className="button">Log out</button></p>
                </div>

                <div className="user-form">
                    <form action="">
                        <p className="first-input">
                            <input type="text" placeholder="First name" />
                            <input type="text" placeholder="Last name" />
                            <input type="text" placeholder="Nice name" />
                        </p>
                        <p className="second-input">
                            <input type="text" placeholder="Email address" />
                            <input type="text" placeholder="Phone number" />
                            <input type="text" placeholder="Your address" />
                        </p>
                        <p className="first-input">
                            <input type="text" placeholder="Country name" />
                            <input type="text" placeholder="City name" />
                            <input type="text" placeholder="Zip code" />
                        </p>
                        <p className="extra-input">
                            <textarea name="text" placeholder="Enter your description. . ." /> <br/>
                            <button className="button">Update Now</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserAccount;