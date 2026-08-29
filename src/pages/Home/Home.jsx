import React from "react";
import Summarycard from "../../components/SummaryCard/SummaryCard";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to CashFlow</h1>

      <p>Personal Finance Dashboard</p>

      <div className="summary-container">

        <Summarycard
          title="Total Balance"
          amount="25,000"
          description="Available balance"
        />

        <Summarycard
          title="Total Income"
          amount="40,000"
          description="This month"
        />

        <Summarycard
          title="Total Expenses"
          amount="15,000"
          description="This month"
        />

      </div>
    </div>
  );
};

export default Home;