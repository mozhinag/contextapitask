import { createContext, useState, useEffect } from 'react'
import {productDetails} from"./productDetails";
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [product,setProducts] = useState(productDetails);
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

  const handleAddToCart = (productDetails) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === productDetails.id);
  
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === productDetails.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...productDetails, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
  
    setCartItems(updatedCartItems);
  };
  
  const handleDecreaseQuantity = (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 1) }
        : cartItem
    );
  
    setCartItems(updatedCartItems.filter((cartItem) => cartItem.quantity > 0));
  };
  
  

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        product,
        setProducts,
        cartItems,
        handleAddToCart,
        handleRemoveItem,
        handleDecreaseQuantity,
      
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};