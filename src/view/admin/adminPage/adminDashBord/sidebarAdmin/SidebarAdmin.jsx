import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function SidebarAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  

  return ( 
      <div className="sidebar-content">
        <h2 Link="/" to="/sss">Admin Panel</h2>
        <ul>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/adminDashBord"}>Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/create-bet"}>Create Bet</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/reports"}>Reports</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/faqs"}>FAQs</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/food-management"}>Food Management</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/add-admin"}>Add Admin</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/Logout"}>Logout</Link>
        </li>

        </ul>
      </div>
  );
}

export default SidebarAdmin;
