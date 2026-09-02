import React, { useState, useRef } from "react";
import "./TransactionForm.css";

const TransactionForm = ({ addIncome, addExpense }) => {
  const [amount, setAmount] = useState("");
  const amountRef = useRef(null);

  const handleIncome = () => {
    if (amount === "") return;

    addIncome(Number(amount));
    setAmount("");
    amountRef.current.focus();
  };

  const handleExpense = () => {
    if (amount === "") return;

    addExpense(Number(amount));
    setAmount("");
    amountRef.current.focus();
  };

  return (
    <div className="transaction-form">
      <h2>Add Transaction</h2>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
          ref={amountRef}
      />

      <div className="transaction-buttons">
        <button onClick={handleIncome}>
          Add Income
        </button>

        <button onClick={handleExpense}>
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default TransactionForm;