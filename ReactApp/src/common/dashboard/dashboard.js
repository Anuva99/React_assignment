import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <div className="main-content">
          <div className="quote-section">
            <p>"Coffee is a language in itself." – Jackie Chan</p>
          </div>
          <Outlet /> {/* Renders child routes */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;