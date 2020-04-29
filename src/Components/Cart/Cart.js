import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart=props.cart;
    console.log(cart);
    // const total=((total,urr)=>total+urr.salary,0);

    // const salar=toNumber(salary);
    let total=0;
    for(let i=0;i<cart.length;i++){
        const urs=cart[i];
        total=(total + urs.salary);
    }

    return (
        <div className="cart">
            <h1> Annual Salary Cart </h1>
            <h3>Person summary :{cart.length}</h3>
            <h1> Total Salary: <br/> $ {total} </h1>
        </div>
    );
};

export default Cart;