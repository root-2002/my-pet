import React, { useState } from 'react';
import './Sidebar.css';

function SidebarAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  

  return ( 
      <div className="sidebar-content">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Settings</li>
          <li>Reports</li>
          <li>Logout</li>
        </ul>
      </div>
  );
}

export default SidebarAdmin;
