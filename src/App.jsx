import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCart from './Components/CoffeeCart';

const App = () => {
  const coffees = useLoaderData();
  
  return (
    <div>
      <h1>Coffe: {coffees.length}</h1>
    <div className='grid grid-cols-2 justify-items-center gap-y-8'>
    {
        coffees.map(coffee => <CoffeeCart
        key={coffee._id}
        coffee = {coffee}
        ></CoffeeCart>)
      }
    </div>
    </div>
  );
};

export default App;
