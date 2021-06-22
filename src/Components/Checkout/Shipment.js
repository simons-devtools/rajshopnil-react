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
        if (cart.length <= 0) {
            alert('Sorry bro! Please, continue shopping cart after follow this way.');
            history.push('/review');
        }
        else {
            let newOrder = { ...loggedInUser, product: cart, shipment: data, orderTime: new Date() };
            fetch('https://rajshopnilserver.herokuapp.com/addOrder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newOrder)
            })
                .then(res => res.json())
                .then(data => {
                    alert('Hey bro! Your order is successfull complete.');
                    history.push('/payment');
                })
        }
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
            <h1>Shipping & Billing Info</h1>

            {/* Users first interface form contents */}
            <div id="defaultModal" className="form-api">
                <div style={{ borderBottom: '1px solid #e4dbec' }}>
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
                        <span>Total items</span>
                        <span className="rightSide">{cart.length} psc</span>
                    </p>
                    <p>
                        <span>Total price (vat + tax)</span>
                        <span className="rightSide">${subTotal}</span>
                    </p>
                </div>
                <p id="formMessage" className="form-message">Please! insert shipping information.</p>
                <button onClick={handleFormMessage} type="button">Proceed To Payment</button>
            </div>

            {/* Users second hidden form contents */}
            <div id="customModal" className="shipping-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="main-forms">
                        <input type="firstName" placeholder="First name" {...register("firstName", { required: true, maxLength: 20 })} />
                        <input type="lastName" placeholder="Last name" {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
                        <input type="phone" placeholder="Mobile" {...register("phone", { required: true })} />
                        <input type="email" placeholder="Email" {...register("email", { required: true })} />
                        <input type="text" placeholder="Address" {...register("address", { required: true })} />
                    </div>
                    <button id="allowedBtn" type="submit">Proceed To Payment</button>
                </form>
            </div>
        </div>
    );
};

export default Shipment;