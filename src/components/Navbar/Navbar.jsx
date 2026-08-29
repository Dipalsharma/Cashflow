import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">C</span>
        <span className="logo-text">CashFlow</span>
      </div>

      <div className="navbar-right">
        <span className="welcome-text">Personal Finance</span>
        <div className="profile">P</div>
      </div>
    </nav>
  );
};

export default Navbar;