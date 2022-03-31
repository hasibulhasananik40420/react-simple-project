import React from 'react';
import './Cart.css'
//   if we to to set props as a parameter  
const Cart = (props) => {
    const {cart} = props
    // console.log(cart);
    let total =0
    let shipping =0
    let quantity =0
    for(const product of cart){
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
    }
    const tax = parseFloat((total * 0.1).toFixed(2))
    const grandTotal = total + shipping + tax
    return (
        <div className='cart'>
             <h3>Order Summary</h3>
                 <p> Selected item : {quantity}</p>
                 <p>Total price : ${total} </p>
                 <p>Total Shipping Charge: ${shipping} </p>
                 <p>Tax:${tax} </p>
                 <h4>Grand Total:${grandTotal.toFixed(2)} </h4>
                 {props.children}

        </div>
    );
};

export default Cart;