import React, { useState } from "react";
import Summarycard from "../../components/SummaryCard/SummaryCard";
import TransactionForm from "../../components/TransactionForm/TransactionForm";

const Home = () => {
  const [income, setIncome] = useState(40000);
  const [expenses, setExpenses] = useState(15000);

  // Balance is calculated automatically
  const balance = income - expenses;

  // Add income
  const addIncome = (amount) => {
    setIncome(income + amount);
  };

  // Add expense
  const addExpense = (amount) => {
    setExpenses(expenses + amount);
  };

  return (
    <div className="home">
      <h1>Welcome to CashFlow</h1>

      <p>Personal Finance Dashboard</p>

      <div className="summary-container">

        <Summarycard
          title="Total Balance"
          amount={balance}
          description="Available balance"
        />

        <Summarycard
          title="Total Income"
          amount={income}
          description="This month"
        />

        <Summarycard
          title="Total Expenses"
          amount={expenses}
          description="This month"
        />

      </div>

      <TransactionForm
        addIncome={addIncome}
        addExpense={addExpense}
      />

    </div>
  );
};

export default Home;