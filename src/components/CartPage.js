import React, { useState, useEffect, useContext } from 'react';
import SingleProduct from './SingleProduct';
import {Cart} from '../Context';

const CartPage = () => {
  const [total, setTotal] = useState();
  const {cart} = useContext(Cart);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: Rs.{total}</span>
      <div className="productContainer">
        {
          cart.map((prod) => (
            <SingleProduct 
              prod={prod}
              key={prod.id}
            />
          ))
        }
      </div>
    </div>
  );
};

export default CartPage;

/*
Javascript .filter(), .map() and .reduce() on real world examples
https://www.youtube.com/watch?v=EzB6Pk66XW8

*/
