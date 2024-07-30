
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Add styles for Sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Best Sellers</h2>
      <div className="best-sellers">
        <ul>
          <li><Link to="/dashboard/coffee1">Espresso</Link></li>
          <li><Link to="/dashboard/coffee2">Latte</Link></li>
          <li><Link to="/dashboard/coffee3">Cappuccino</Link></li>
          <li><Link to="/dashboard/coffee4">Macchiato</Link></li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;