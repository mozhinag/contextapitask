import React, { useContext } from 'react';
import { CartContext } from './Context/CartContext';

const CartItem = () => {
  const { cartItems, handleRemoveItem, getCartTotal, handleAddToCart,handleDecreaseQuantity } = useContext(CartContext);

  return (
    <div>
      <div className="productContainer-fluid">
        <h2>Shopping Cart</h2>
        {cartItems.length > 0 ? (
          <ul className="list-group">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                           <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.name}</div>
                  <div>${item.price*item.quantity}</div>
                  <div>Quantity: {item.quantity}</div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button
                    className="btn btn-sm btn-primary me-md-2"
                    type="button"
                    onClick={() => handleAddToCart(item)}
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-primary me-md-2"
                    type="button"
                    onClick={() => handleDecreaseQuantity(item)}
                  >
                    -
                  </button>
                </div>
                <button className="btn btn-sm btn-danger" onClick={() => handleRemoveItem(item)}>
                  X
                </button>
                </li>
            ))}
          </ul>
        ) : (
          <p>No items in the cart</p>
        )}

        <span>
          <h2>Total: ${getCartTotal()}</h2>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
