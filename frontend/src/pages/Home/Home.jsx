import React, { useState, useEffect, useMemo, useCallback } from "react";
import Summarycard from "../../components/SummaryCard/SummaryCard";
import TransactionForm from "../../components/TransactionForm/TransactionForm";

const Home = () => {
  const [income, setIncome] = useState(40000);
  const [expenses, setExpenses] = useState(15000);

  // Calculate balance using useMemo
  const balance = useMemo(() => {
    return income - expenses;
  }, [income, expenses]);

  // Update document title when balance changes
  useEffect(() => {
    document.title = `CashFlow | Balance: ₹${balance}`;
  }, [balance]);

  // Component lifecycle
  useEffect(() => {
    console.log("CashFlow Home component mounted");

    return () => {
      console.log("CashFlow Home component unmounted");
    };
  }, []);

  // Add income using useCallback
  const addIncome = useCallback((amount) => {
    setIncome((prevIncome) => prevIncome + amount);
  }, []);

  // Add expense using useCallback
  const addExpense = useCallback((amount) => {
    setExpenses((prevExpenses) => prevExpenses + amount);
  }, []);

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