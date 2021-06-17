import './Payment.css';
import React, { useEffect, useState } from 'react';
import Loading from '../../images/icons/loading.gif';
import Image1 from '../../images/product-pic/bkash.png';
import Image2 from '../../images/product-pic/nagad.png';
import Image3 from '../../images/product-pic/payoneer.png';
import Image4 from '../../images/product-pic/paypal.png';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Payment = () => {
    const history = useHistory();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        setCart(savedCart);
    }, [])

    // Cart product/budget details:
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + Number(product.price) * product.quantity || 0;
    }
    let subTotal = total / 50 + total;

    // .....
    // Proceed Checkout eventHandler func
    const handleOrderConfirm = () => {
        if (cart.length === 0) {
            alert('Please! Continue shopping after follow this way.');
        }
        else {
            const myModal = document.getElementById("myModal");
            myModal.style.display = "block";
        }
    }

    // Success button func:
    const handleSuccessBtn = () => {
        const myModal = document.getElementById("myModal");
        myModal.style.display = "none";
        alert('Congratulation! Your order has been confirm.....!!');

        cart.length = 0;
        let newCart = [...cart];
        setCart(newCart);
        processOrder(cart);
        // Mongodb cart product delete func here...!!
        history.push('/home');
    }


    // Wrong button func:
    const handleWrongBtn = () => {
        const myModal = document.getElementById("myModal");
        myModal.style.display = "none";
    }

    return (
        <div>
            {/* Modal contents */}
            <div id="myModal" className="modal" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )` }}>
                <div className="modal-body">
                    <h2>Welcome! Are you sure confirm your order.....??</h2>
                    <button onClick={handleSuccessBtn} className="confirm-btn">Confirm</button>
                    <button onClick={handleWrongBtn} className="cancel-btn">Cancel</button>
                </div>
            </div>

            {/* Payments method */}
            {
                cart.length <= 0 ? <img src={Loading} className="loading" alt="loading-img" /> :
                    <div className="payment-container">
                        <div className="payment-method">
                            <h1>Select payment method</h1>
                            <ul className="select-payment">
                                <li><img src={Image1} className="item-box" alt="" /></li>
                                <li><img src={Image2} className="item-box" alt="" /></li>
                                <li><img src={Image3} className="item-box" alt="" /></li>
                                <li><img src={Image4} className="item-box" alt="" /></li>
                            </ul>
                        </div>

                        <div className="payment-summary">
                            <h1>Order cart summary</h1>
                            <div>
                                <article className="payment-info">
                                    <strong>Subtotal Items</strong>
                                    <span className="right">{cart.length} psc</span>
                                </article>
                                <article className="payment-info">
                                    <span><strong>Total Amount </strong>(1 items and shipping fee included)</span>
                                    <span className="right">${subTotal}</span>
                                </article>
                            </div>
                        </div>
                    </div>
            }

            {/* Payment details */}
            <div style={{ textAlign: 'center' }} className="pay-area">
                {
                    cart.length <= 0 ?
                        <h3 style={{ color: 'green' }}>Sorry bro! You could not come to the right path</h3> :
                        <h3 style={{ color: 'green' }}>Please! wait, Your order is proccesing</h3>
                }
                <h1 style={{ paddingTop: '10px' }}>You are welcome to continue shopping!</h1>
                {
                    cart.length <= 0 ?
                        <Link to="/home"><button type="button">Continue Shopping</button></Link> :
                        <button onClick={handleOrderConfirm} type="submit">Payment Now</button>
                }
            </div>
        </div>
    );
};

export default Payment;