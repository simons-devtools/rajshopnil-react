import './Shipment.css';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { useHistory } from 'react-router';
import DnsIcon from '@material-ui/icons/Dns';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';

const Shipment = (props) => {
    const { cart } = props;
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { name, email } = loggedInUser;

    // Cart product/budget details:
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + Number(product.price) * product.quantity || 0;
    }
    let subTotal = total / 50 + total;

    // Order confirm/post submited func:
    const onSubmit = (data) => {
        let newOrder = { ...loggedInUser, product: cart, shipment: data, orderTime: new Date() };
        fetch('http://localhost:5200/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                alert('Are you sure order this product?');
                history.push('/payment');
            })
    };

    // Handle for the FORM toggle func:
    function handleForm() {
        if (cart.length === 0) {
            alert('Please! Continue shopping after follow this way.');
        } else {
            const defaultModal = document.getElementById("defaultModal");
            defaultModal.style.display = "none";

            const customModal = document.getElementById("customModal");
            customModal.style.display = "block";

            const button = document.getElementById("allowedBtn");
            button.style.backgroundColor = "tomato";
            button.style.cursor = "pointer";
        }
    }

    // Handle toggle button message func:
    function handleFormMessage() {
        const warningMessage = document.getElementById("formMessage");
        warningMessage.style.display = "block";
    }

    return (
        <div className="shipment-page">
            <h1>Customer Shipping & Billing Info</h1>

            <div id="defaultModal" className="form-api">
                <div style={{ borderBottom: '1px solid #e4dbec' }}>
                    <p id="formMessage" className="form-message">Please! insert shipping information. Click "Edit & Complete"</p>
                    <p>
                        <span className="iconss"><DnsIcon className="icons" /></span>
                        <span>{name}</span>
                        <span onClick={handleForm} className="rights">Edit & Complete</span>
                    </p>
                    <p>
                        <span className="iconss"><PhoneAndroidIcon className="icons" /></span>
                        <span style={{ color: 'red' }}>Mobile number empty!</span>
                    </p>
                    <p>
                        <span className="iconss"><MailOutlineIcon className="icons" /></span>
                        <span>{email}</span>
                    </p>
                    <p>
                        <span className="iconss"><HomeIcon className="icons" /></span>
                        <span style={{ color: 'red' }}>Shipping address empty!</span>
                    </p>
                </div>
                <div style={{ paddingBottom: '20px' }}>
                    <p>
                        <span>Subtotal items</span>
                        <span className="rightSide">{cart.length} psc</span>
                    </p>
                    <p>
                        <span>Subtotal price (vat + tax included)</span>
                        <span className="rightSide">${subTotal}</span>
                    </p>
                </div>
                <button onClick={handleFormMessage} type="button">Proceed To Payment</button>
            </div>

            <div id="customModal" className="shipping-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="firstName" placeholder="First name" {...register("firstName", { required: true, maxLength: 20 })} /> <br />
                    <input type="lastName" placeholder="Last name" {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} /> <br />
                    <input type="phone" placeholder="Mobile" {...register("phone", { required: true })} /> <br />
                    <input type="email" placeholder="Email" {...register("email", { required: true })} /> <br />
                    <input type="text" placeholder="Address" {...register("address", { required: true })} /> <br />
                    <p className="form-note">Note: Submit form must be full filled</p>
                    <button id="allowedBtn" type="submit">Proceed To Payment</button>
                </form>
            </div>

        </div>
    );
};

export default Shipment;