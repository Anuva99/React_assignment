import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-logo">Cafe Logo</h1>
      <div className="navbar-right">
        <div className="navbar-menu">
          <a href="#menu">Menu</a>
          <a href="#about">About Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;