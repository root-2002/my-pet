import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar"; // Import the Sidebar component
import './Navebar.css';

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 10.0 },
    { id: 2, name: "Item 2", price: 15.0 },
    { id: 3, name: "Item 3", price: 20.0 },
  ]);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const closeSidebar = () => setShowSidebar(false);
  const removeItem = (id) => setCartItems(cartItems.filter((item) => item.id !== id));

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Logo Section */}
          <Link className="navbar-brand" to="/">
            <img
              src="https://i.pinimg.com/736x/58/9c/13/589c139c559b2ec07ea5bc0651bb4843.jpg"
              alt="Logo"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Navigation Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              
            </ul>

            {/* Search Form */}
            <form className="d-flex me-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            {/* Shopping Cart Icon */}
            <button
              className="btn btn-outline-secondary"
              onClick={toggleSidebar}
            >
              <img
                src="shopping-cart-icon-19.png"
                alt="Cart"
              />
              <span className="ms-2">Cart</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Component */}
      <Sidebar
        showSidebar={showSidebar}
        closeSidebar={closeSidebar}
        cartItems={cartItems}
        removeItem={removeItem}
      />
    </div>
  );
}

export default Navbar;
