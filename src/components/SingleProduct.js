import React from 'react';

const SingleProduct = ({prod, cart, setCart})=> {


  return(
    <div className='products'>
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{fontWeight: 700}} >{prod.name}</span>
        <span>₹ {prod.price.substring(0, 3)}</span>
      </div>

      <button 
        className="add"
        onClick={()=> {
          setCart([...cart, prod]);
        }}
      >
        Add To Cart
      </button>

      <button 
        className="add"
        onClick={()=> {
          setCart(cart.filter((c)=> c.id !== prod.id));
        }}
      >
        Add To Cart
      </button>

    </div>
  )
}

export default SingleProduct;