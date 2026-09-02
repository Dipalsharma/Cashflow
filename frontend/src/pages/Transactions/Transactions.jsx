import React, { useEffect, useState } from "react";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/transactions")
      .then((response) => response.json())
      .then((data) => {
        console.log("API DATA:", data);
        setTransactions(data.transactions);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading transactions...</h2>;
  }

  return (
    <div className="page">
      <h1>Transactions</h1>

      <p>Transactions loaded from MongoDB through the CashFlow API.</p>

      {transactions.map((transaction) => (
        <div key={transaction._id}>
          <h3>{transaction.description}</h3>
          <p>Type: {transaction.type}</p>
          <p>Amount: ₹{transaction.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Transactions;