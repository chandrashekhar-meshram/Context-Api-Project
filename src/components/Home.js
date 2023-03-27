import React, {useState} from 'react';
import faker from 'faker';
import './style.css';
import SingleProduct from './SingleProduct';

faker.seed(100);

const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  //console.log("productArray - ", productArray);
  const [cart, setCart] = useState([]);
  const[products] = useState(productArray);
  console.log("cart - ", cart);

  return (
    <div className='productContainer'>
      {
        products.map((prod) => (
          <SingleProduct  prod={prod} key={prod.id} cart={cart} setCart={setCart} />
        ))
      }     
    </div>
  );
};

export default Home;
