import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar({ showSidebar, closeSidebar, cartItems, removeItem }) {
  return (
    <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
      <div>
      <button className="close-btn" onClick={closeSidebar}>Close</button>

      <Link className="close-btn ms-5" to={"/addInfoemation"}>Supmition</Link>
      </div>

      
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
