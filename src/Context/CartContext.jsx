import React, { createContext, useState } from "react";
import { productDetails } from "./productDetails";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [product, setProduct] = useState(productDetails);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

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

    setTotal(total + parseFloat(productDetails.price));
  };

  const handleRemoveItem = (item) => {
    alert(`Item ${item.name} is removed`);
    const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setTotal(total - item.price * item.quantity);
    setCart(newCart);
  };

  const handleIncreaseQuantity = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCart(updatedCart);
    setTotal(total + parseFloat(item.price));
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
      setCart(updatedCart);
      setTotal(total - parseFloat(item.price));
    }
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
