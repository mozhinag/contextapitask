
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartContext } from './Context/CartContext';

function Navbar() {
 
  const { cartItems } = useContext(CartContext);


  return <>

    <div className="container px-4 px-lg-5">
      Start Bootstrap
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="">About</Link></li>
          <li className="nav-item dropdown"><Link className="nav-link" to="">Shop</Link></li>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link to =" ">All Products</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to=" ">Popular Items</Link></li>
              <li><Link className="dropdown-item" to=" ">New Arrivals</Link></li>
            </ul>
        
        </ul>
       
     
        <Link to="/cartitem" className="nav-link" > Cart({cartItems.length})</Link>


      
      </div>
    </div>


  </>


}
export default Navbar;
