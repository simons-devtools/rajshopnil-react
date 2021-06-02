import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce( (total, prd) => total + prd.price, 0)

    // Total Cost
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i].product;
        total = total + Number(product.price);
    }

    // Shipping Cost Condition
    let shipping = 0;
    if (total > 99) {
        shipping = 0;
    }
    else if (total > 49) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 9.99;
    }

    // const subTotal = total.toFixed(2);
    // const shippingCost = shipping.toFixed(2);
    const tax = Number(total / 20).toFixed(2); // for faction numbers "round"
    const grandTotal = (total + shipping + Number(tax)).toFixed(2); // for faction numbers "toFixed"

    // Formating faction numbers for function
    // const formatNumber = num => {
    //     const precision = num.toFixed(2);
    //     return Number(precision);
    // }

    return (
        <div className="cart-container">
            <div className="cart-body">
                <h1>Your order cart details</h1>

                <div className="wrapper-progressBar">
                    <ul className="progressBar">
                        <li className="active">Processed</li>
                        <li className="active">Payment</li>
                        <li>Paid</li>
                    </ul>
                </div>

                <div className="cart-detail">
                    <div className="cart-infoo">
                        <h3>Products Items</h3>
                        <h3>Products price</h3>
                        <h3>Shipping cost</h3>
                        <h3>Vat + Tax</h3>
                    </div>
                    <div className="cart-infoo">
                        <h3>{cart.length} psc</h3>
                        <h3>${total}</h3>
                        <h3>${shipping}</h3>
                        <h3>${tax}</h3>
                    </div>
                </div>
                <div className="cart-total">
                    <h2>Total badget</h2>
                    <h2>${grandTotal}</h2>
                </div>

                <div className="cart-btnn">
                    {
                        props.children
                    }
                </div>

            </div>
        </div>
    );
};

export default Cart;