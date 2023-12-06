// CartProvider.js

import React, { createContext, useState } from "react";
import { productDetails } from "./productDetails";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [product, setProduct] = useState(productDetails);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const calculateTotal = (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleAddToCart = (productDetails) => {
    const existingItem = cart.find((item) => item.id === productDetails.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item

      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...productDetails, quantity: 1 }]);
    }
    setTotal(calculateTotal(cart));
 
  
  };

  const handleRemoveItem = (item) => {
    alert(`Item ${item.name} is removed`);
    const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    
    setCart(newCart);
    setTotal(calculateTotal(newCart));
  };

  const handleIncreaseQuantity = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
       
            price: cartItem.price * (cartItem.quantity + 1),
          }
        : cartItem
    );

    setCart(updatedCart);
    setTotal(calculateTotal(updatedCart));
  };

  const handleDecreaseQuantity = (item) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        const newQuantity = Math.max(cartItem.quantity - 1, 1);
        return {
          ...cartItem,
          quantity: newQuantity,
          
          price: cartItem.price * newQuantity,
        };
      }
      return cartItem;
    });
  
    setCart(updatedCart);
    setTotal(calculateTotal(updatedCart));
  };
  

  return (
    <CartContext.Provider
      value={{
        product,
        cart,
        total,
        handleAddToCart,
        handleRemoveItem,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
