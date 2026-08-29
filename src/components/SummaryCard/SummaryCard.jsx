import React from "react";
import "./SummaryCard.css";

const SummaryCard = ({ title, amount, description }) => {
  return (
    <div className="summary-card">
      <p className="summary-title">{title}</p>

      <h2 className="summary-amount">
        {amount}
      </h2>

      <p className="summary-description">
        {description}
      </p>
    </div>
  );
};

export default SummaryCard;