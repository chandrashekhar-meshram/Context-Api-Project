import React from 'react';

const Cart = ({cart, setCart})=> {

  return(
    <div>
      <span style={{fontSize: 30}}>My Cart</span>
      <br/>
      <span style={{fontSize: 30}}>Total: Rs.100</span>
    </div>
  )
}

export default Cart;