import React from 'react';
import faker from 'faker';
import './style.css';

const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
  }));

  console.log("productArray - ", productArray);

  return <div>Home</div>;
};

export default Home;
