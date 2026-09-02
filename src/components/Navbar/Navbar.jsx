import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useFinance } from "../../context/FinanceContext";
const Navbar = () => {
  const { currency, setCurrency } = useFinance();
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-box">C</div>
        <h2>CashFlow</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/transactions">Transactions</Link>
      </div>

      <div className="profile">
        <span>Personal Finance</span>
        <div className="profile-circle">P</div>
      </div>
      <button onClick={() => setCurrency(currency === "₹" ? "$" : "₹")}>
       Change Currency
      </button>
    </nav>
  );
};

export default Navbar;