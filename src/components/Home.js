import React, {useState} from 'react';
import faker from 'faker';
import './style.css';
import SingleProduct from './SingleProduct';

const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
  }));

  console.log("productArray - ", productArray);
  const[products] = useState(productArray);

  return (
    <div className='productContainer'>
      {
        products.map((prod) => (
          <SingleProduct  prod={prod} />
        ))
      }     
    </div>
  );
};

export default Home;
