import React from 'react';
import { SidebarAdmin, Card } from '../../../router/componentRouter'; // Ensure correct paths
import './AdminDashBordBage.css'; // Import CSS for styling

function AdminDashBordBage() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#f4f4f4' }}>
        <SidebarAdmin />
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <h1>Admin Dashboard</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {/* Cards with Links and Text */}
          <Card
          imageSrc='./cat.avif'
            title="Create Bet" 
            text="Easily create and manage new bets in the system." 
            button="Create Bet" 
            link="/create-bet" 
          />
          <Card 
          imageSrc='./data-report-icon-1977x2048-lz0adr22.png'
            title="Reports" 
            text="Access detailed reports and insights about system performance." 
            button="View Reports" 
            link="/reports" 
          />
          <Card 
            imageSrc='FAQ.jpg'
            title="FAQs" 
            text="Manage frequently asked questions for users." 
            button="Manage FAQs" 
            link="/faqs" 
          />
          <Card 
          imageSrc='OIP.jpeg'
            title="Food Management" 
            text="Track and manage food performance and related statistics." 
            button="Manage Food" 
            link="/food-management" 
          />
          <Card 
          imageSrc='admin.jpeg'
            title="Add Admin" 
            text="Add new administrators to manage the system effectively." 
            button="Add Admin" 
            link="/add-admin" 
          />
        </div>
      </div>
    </div>
  );
}

export default AdminDashBordBage;
