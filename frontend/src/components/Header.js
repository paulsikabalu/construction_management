import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="Company Logo" />
          <span><a href="/">CONSTRUCTION MANAGEMENT SYSTEM</a></span>
        </div>
        <div className="header-right">
          <ul className="nav-links">
            <li><a href="/">Dashboard</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/tasks">Tasks</a></li>
            <li><a href="/teams">Teams</a></li>
            <li><a href="/reports">Reports</a></li>
          </ul>
          <div className="user-signup-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="user-profile">
              <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="User Avatar" />
              <span>Professor Paul</span>
            </div>
            <div className={`signup-button ${isHovered ? 'show' : ''}`}>
            <a href="/signup" className="btn btn-primary">Login</a>
            <br></br>
              <a href="/signup" className="btn btn-primary">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
