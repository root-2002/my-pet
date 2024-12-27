import React from "react";

// Cart Component
function Cart({ cartItems, removeItem, getTotal, onClose }) {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasCart"
      aria-labelledby="offcanvasCartLabel"
      style={{
        position: "fixed",
        top: 0,
        left: "0",
        width: "300px",
        height: "100%",
        backgroundColor: "#f8f9fa",
        boxShadow: "2px 0 5px rgba(0, 0, 0, .3)",
        zIndex: 1050,
        transition: "left 0.3s ease",
      }}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasCartLabel">
          Shopping Cart
        </h5>
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        {cartItems.length === 0 ? (
          <p>Your cart is empty. Add items to your cart.</p>
        ) : (
          <div>
            <ul className="list-group">
              {cartItems.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.name} - ${item.price}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItem(item.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <hr />
            <p>Total: ${getTotal()}</p>
            <div className="dropdown mt-3">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Cart Options
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    View Cart
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Checkout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
