import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart);
    //const total=((total,urr)=>total+urr.salary,0)

    //const salary=props.salary;
    let total=0;
    for(let i=0;i<cart.length;i++){
        const urs=cart[i];
        total=total + urs.salary;
    }

    return (
        <div>
            <h1>This is Salary Area </h1>
            <h4>Salary summary :{cart.length}</h4>
            <h1> Total Salary: {total} </h1>
        </div>
    );
};

export default Cart;