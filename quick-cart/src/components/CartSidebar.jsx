import React from 'react';
import '../styles/CartSidebar.css';

function CartSidebar({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem }) {
  // TODO: Calculate total price
  const calculateTotal = () => {
    // Hint: Use reduce similar to getTotalItems
    // return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    return cart.reduce((total,item) => total + (item.price * item.quantity), 0);
  };

  return (
    // TODO: Add className that changes based on isOpen
    // Hint: className={`cart-sidebar ${isOpen ? 'open' : ''}`}
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      
      {/* Header */}
      <div className="cart-header">
        <h2>Your Cart</h2>
        {/* TODO: Add close button that calls onClose */}
        <button onClick={onClose} className="close-btn">✕</button>
      </div>

      {/* Cart Items */}
      <div className="cart-items">
        {cart.length === 0 ? (
          // TODO: Show empty cart message
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="cart-item">
              {/* TODO: Display item image */}
              {/* TODO: Display item name and price */}
              {/* TODO: Add quantity controls (+, -, remove) */}
              
              
              {/* <img src={item.image} alt={item.name} className="cart-item-image"/>
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </div>
              <div className="quantity-controls">
                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => onRemoveItem(item.id)}>🗑️</button> */}

  <img src={item.image} alt={item.name} className="cart-item-image" />
  
  <div className="cart-item-details">
    <h4 className="cart-item-name">{item.name}</h4>
    <p className="cart-item-price">${item.price}</p>
  </div>
  
  <div className="cart-item-quantity">
    <button 
      className="quantity-btn"
      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
    >
      −
    </button>
    <span className="quantity-display">{item.quantity}</span>
    <button 
      className="quantity-btn"
      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
    >
      +
    </button>
  </div>
  
  <button 
    className="remove-btn"
    onClick={() => onRemoveItem(item.id)}
    aria-label="Remove item"
  >
    ✕
  </button>


             
            </div>
          ))
        )}
      </div>

      {/* Footer with total */}
      {cart.length > 0 && (
        <div className="cart-footer">
          <span>Total:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;