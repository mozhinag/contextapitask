import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import CartItem from './CartItem';

import { CartProvider } from './Context/CartContext';

function App() {


  return (
    <BrowserRouter>
      <CartProvider>

        <div className='container-fluid'>
          <div className='row'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Navbar />
            </nav>
            <header className="bg-dark py-5">
              <Header />
            </header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cartitem" element={<CartItem />} />
            </Routes>
            <footer className="py-5 bg-dark">
              <Footer />
            </footer>

          </div>
        </div>

      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
