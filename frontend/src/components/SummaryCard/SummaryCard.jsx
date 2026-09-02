import React from "react";
import { useFinance } from "../../context/FinanceContext";
import "./SummaryCard.css";

const SummaryCard = ({ title, amount, description }) => {
  const { currency } = useFinance();

  return (
    <div className="summary-card">
      <h3>{title}</h3>

      <h2>
        {currency}
        {amount}
      </h2>

      <p>{description}</p>
    </div>
  );
};

export default SummaryCard;