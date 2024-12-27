import React from 'react';
import './Sidebar.css';

function Sidebar({ showSidebar, closeSidebar, cartItems, removeItem }) {
  return (
    <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
      <button className="close-btn" onClick={closeSidebar}>Close</button>
      
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-name">{item.name}</div>
            <div className="item-price">${item.price}</div>
            <div className="remove-item" onClick={() => removeItem(item.id)}>
              Remove
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Sidebar;
