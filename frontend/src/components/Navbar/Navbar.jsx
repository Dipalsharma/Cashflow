import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useFinance } from "../../context/FinanceContext";

const Navbar = () => {
  const { currency, setCurrency } = useFinance();

  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem("cashflowProfile");

    return savedProfile
      ? JSON.parse(savedProfile)
      : {
          name: "Dipal Sharma",
          email: "",
        };
  });

  useEffect(() => {
    const updateProfile = () => {
      const savedProfile = localStorage.getItem("cashflowProfile");

      if (savedProfile) {
        setProfile(JSON.parse(savedProfile));
      }
    };

    // Same tab profile update
    window.addEventListener("cashflowProfileUpdated", updateProfile);

    // Other tab/window update
    window.addEventListener("storage", updateProfile);

    return () => {
      window.removeEventListener(
        "cashflowProfileUpdated",
        updateProfile
      );

      window.removeEventListener("storage", updateProfile);
    };
  }, []);

  const profileName = profile.name || "Dipal Sharma";
  const profileInitial = profileName.charAt(0).toUpperCase();

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-box">C</div>
        <h2>CashFlow</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
      </div>

      <div className="profile">
        <Link to="/profile" className="profile-link">
          <span>{profileName}</span>

          <div className="profile-circle">
            {profileInitial}
          </div>
        </Link>

        <button
          onClick={() =>
            setCurrency(currency === "₹" ? "$" : "₹")
          }
        >
          {currency === "₹" ? "USD $" : "INR ₹"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;