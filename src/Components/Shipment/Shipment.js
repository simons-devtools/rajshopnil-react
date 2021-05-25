import './Shipment.css';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { UserCartContext } from '../../App';
import { useHistory } from 'react-router';
// import DnsIcon from '@material-ui/icons/Dns';
// import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import HomeIcon from '@material-ui/icons/Home';

const Shipment = () => {
    const { register, handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userCart, setUserCart] = useContext(UserCartContext);
    const history = useHistory();

    const onSubmit = (data) => {
        let newOrder = { ...loggedInUser, product: userCart, shipment: data, orderTime: new Date() };
        fetch('http://localhost:5200/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(orderedProducts => {
                console.log('Your order is updated', orderedProducts);
                history.push('/payment');
            })
    };

    return (
        <div className="shipment-page">
            <h1>Shipping & Billing Info</h1>
            <div className="shipping-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="firstName" placeholder="First name" {...register("firstName", { required: true, maxLength: 20 })} /> <br />
                    <input type="lastName" placeholder="Last name" {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} /> <br />
                    <input type="phone" placeholder="Mobile" {...register("phone", { required: true })} /> <br />
                    <input type="email" placeholder="Email" {...register("email", { required: true })} /> <br />
                    <input type="text" placeholder="Address" {...register("address", { required: true })} /> <br />
                    <p className="form-note">Note: Submit form must be full filled</p>
                    <button type="submit">Proceed To Payment</button>
                </form>
            </div>

            {/* <div className="form-api">
                <p>
                    <span className="iconss"><DnsIcon /></span>
                    <span>Mr. simon</span>
                    <span className="right">EDIT</span>
                </p>
                <p>
                    <span className="iconss"><PhoneAndroidIcon /></span>
                    <span>+880 1799867752</span>
                    <span className="right">EDIT</span>
                </p>
                <p>
                    <span className="iconss"><MailOutlineIcon /></span>
                    <span>simox71yznath@gmail.com</span>
                    <span className="right">EDIT</span>
                </p>
                <p>
                    <span className="iconss"><HomeIcon /></span>
                    <span>South-Salna, Salna-bazar, Gazipur-Shadar, Dhaka, Bangladesh</span>
                    <span className="right">EDIT</span>
                </p>
                <button>Proceed To Payment</button>
            </div> */}
        </div>
    );
};

export default Shipment;