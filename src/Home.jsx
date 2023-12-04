
import { useContext } from 'react';

import Products from './Products';
import { CartContext } from './Context/CartContext';


const Home = () => {
 const {product} =useContext(CartContext)

 

  

  return (

    <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {
          product.map((detail, index) => {
            return (<Products key={index} Details={detail}  ></Products>)
          })
        }


      </div>
    </div>
  </section>

  )
}

export default Home