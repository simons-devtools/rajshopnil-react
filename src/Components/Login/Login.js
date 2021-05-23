import './Login.css';
import backCover from '../../images/product-pic/02.png';
import google from '../../images/icons/google.png';
import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

import Slide from '@material-ui/core/Slide';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    // Modal layout start:
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    }; // Modal layout start;

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSiggedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    // Google Sign In Func
    const googleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then((res) => {
                const { photoURL, displayName, email } = res.user;
                const siggedInUser = {
                    isSiggedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                // setUser(siggedInUser);
                setLoggedInUser(siggedInUser);
                storeAuthToken(); // Store Auth Token
                // console.log(siggedInUser);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then((idToken) => {
                // Send token to your backend via HTTPS
                sessionStorage.setItem('token', idToken);
                history.replace(from);
                // console.log(idToken);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Google Sign Out Func
    const googleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const siggedOutUser = {
                    isSiggedIn: false,
                    name: '',
                    email: '',
                    photo: ''
                }
                setUser(siggedOutUser);
                setLoggedInUser(siggedOutUser);
                // console.log(siggedOutUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${backCover})`, backgroundRepeat: 'no-repeat'}} className="form-main">
            <div className="login-formm">
                <div className="form-body">
                    <h1>Google Authentication</h1>
                    <img src={google} onClick={handleChange} />
                </div>
                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                    <div>
                        {
                            user.isSiggedIn ? <button onClick={googleSignOut}>Google Sign Out</button> :
                                <button onClick={googleSignIn} style={{ padding: "10px 30px" }}>Google Sign In</button>
                        }
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Login;