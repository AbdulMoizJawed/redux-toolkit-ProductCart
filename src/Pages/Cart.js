import React, { useState } from 'react';
import { remove } from '../Store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';



const Cart = () => {
   const products = useSelector(state=>state.cart)
   const dispatch = useDispatch()

   const handleRemove = (id)=>{
       dispatch(remove(id))
   }

    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {products && products.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img className='productImage' src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;