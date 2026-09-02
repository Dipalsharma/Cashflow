import React, { useEffect, useState } from "react";
import "./Transactions.css";

const API_URL = "http://localhost:5000/api/transactions";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    type: "income",
    amount: "",
    description: "",
  });

  // =========================
  // GET TRANSACTIONS
  // =========================

  const fetchTransactions = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (data.success) {
        setTransactions(data.transactions);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setMessage("Unable to connect to CashFlow API.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // =========================
  // FORM CHANGE
  // =========================

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // =========================
  // ADD TRANSACTION
  // =========================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.amount || !formData.description.trim()) {
      setMessage("Please enter amount and description.");
      return;
    }

    setSaving(true);
    setMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: formData.type,
          amount: Number(formData.amount),
          description: formData.description.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormData({
          type: "income",
          amount: "",
          description: "",
        });

        setMessage("Transaction added successfully.");
        await fetchTransactions();
      } else {
        setMessage(data.message || "Unable to add transaction.");
      }
    } catch (error) {
      console.error("Error adding transaction:", error);
      setMessage("Something went wrong while adding transaction.");
    } finally {
      setSaving(false);
    }
  };

  // =========================
  // START EDIT
  // =========================

  const handleEdit = (transaction) => {
    setEditingId(transaction._id);

    setFormData({
      type: transaction.type,
      amount: transaction.amount,
      description: transaction.description,
    });

    setMessage("");

    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };

  // =========================
  // UPDATE TRANSACTION
  // =========================

  const handleUpdate = async (event) => {
    event.preventDefault();

    if (!formData.amount || !formData.description.trim()) {
      setMessage("Please enter amount and description.");
      return;
    }

    setSaving(true);
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/${editingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: formData.type,
          amount: Number(formData.amount),
          description: formData.description.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setEditingId(null);

        setFormData({
          type: "income",
          amount: "",
          description: "",
        });

        setMessage("Transaction updated successfully.");
        await fetchTransactions();
      } else {
        setMessage(data.message || "Unable to update transaction.");
      }
    } catch (error) {
      console.error("Error updating transaction:", error);
      setMessage("Something went wrong while updating transaction.");
    } finally {
      setSaving(false);
    }
  };

  // =========================
  // CANCEL EDIT
  // =========================

  const handleCancelEdit = () => {
    setEditingId(null);

    setFormData({
      type: "income",
      amount: "",
      description: "",
    });

    setMessage("");
  };

  // =========================
  // DELETE TRANSACTION
  // =========================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        setTransactions((currentTransactions) =>
          currentTransactions.filter(
            (transaction) => transaction._id !== id
          )
        );

        setMessage("Transaction deleted successfully.");
      } else {
        setMessage(data.message || "Unable to delete transaction.");
      }
    } catch (error) {
      console.error("Error deleting transaction:", error);
      setMessage("Something went wrong while deleting transaction.");
    }
  };

  // =========================
  // CALCULATIONS
  // =========================

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  const balance = totalIncome - totalExpense;

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="transactions-loading">
        <div className="loading-spinner"></div>
        <p>Loading your transactions...</p>
      </div>
    );
  }

  // =========================
  // UI
  // =========================

  return (
    <div className="transactions-page">

      {/* HEADER */}
      <section className="transactions-header">
        <div>
          <p className="eyebrow">PERSONAL FINANCE</p>

          <h1>Transactions</h1>

          <p className="subtitle">
            Track your income and expenses in one place.
          </p>
        </div>

        <div className="header-stat">
          <span>TRANSACTIONS</span>
          <strong>{transactions.length}</strong>
        </div>
      </section>

      {/* MESSAGE */}
      {message && (
        <div className="status-message">
          {message}
        </div>
      )}

      {/* SUMMARY */}
      <section className="summary-grid">

        <div className="summary-card balance-card">
          <div className="summary-top">
            <span className="card-label">Current Balance</span>
            <div className="card-icon">₹</div>
          </div>

          <h2>₹{balance.toLocaleString("en-IN")}</h2>

          <p>
            {balance >= 0
              ? "Your finances are looking good"
              : "Your expenses are higher than income"}
          </p>
        </div>

        <div className="summary-card income-card">
          <div className="summary-top">
            <span className="card-label">Total Income</span>

            <div className="mini-icon income-icon">↑</div>
          </div>

          <h2>₹{totalIncome.toLocaleString("en-IN")}</h2>

          <span className="income-badge">
            ↑ Money In
          </span>
        </div>

        <div className="summary-card expense-card">
          <div className="summary-top">
            <span className="card-label">Total Expenses</span>

            <div className="mini-icon expense-icon">↓</div>
          </div>

          <h2>₹{totalExpense.toLocaleString("en-IN")}</h2>

          <span className="expense-badge">
            ↓ Money Out
          </span>
        </div>

      </section>

      {/* ADD / EDIT */}
      <section className="add-section">

        <div className="section-heading">
          <div>
            <p className="eyebrow">
              {editingId ? "EDIT TRANSACTION" : "QUICK ACTION"}
            </p>

            <h2>
              {editingId
                ? "Update Transaction"
                : "Add Transaction"}
            </h2>
          </div>

          {editingId && (
            <button
              type="button"
              className="cancel-button"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          )}
        </div>

        <form
          onSubmit={editingId ? handleUpdate : handleSubmit}
          className="transaction-form"
        >

          <div className="input-group">
            <label>Type</label>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <div className="input-group">
            <label>Amount</label>

            <input
              type="number"
              name="amount"
              placeholder="₹ 0"
              value={formData.amount}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <div className="input-group description-input">
            <label>Description</label>

            <input
              type="text"
              name="description"
              placeholder="e.g. Monthly Salary"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={saving}
          >
            {saving
              ? "Saving..."
              : editingId
              ? "✓ Update Transaction"
              : "+ Add Transaction"}
          </button>

        </form>
      </section>

      {/* TRANSACTIONS */}
      <section className="list-section">

        <div className="list-header">

          <div>
            <p className="eyebrow">ACTIVITY</p>

            <h2>Recent Transactions</h2>

            <p className="list-subtitle">
              Your latest financial activity
            </p>
          </div>

          <span className="transaction-count">
            {transactions.length}{" "}
            {transactions.length === 1
              ? "transaction"
              : "transactions"}
          </span>

        </div>

        {transactions.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">₹</div>

            <h3>No transactions yet</h3>

            <p>
              Add your first income or expense above.
            </p>
          </div>
        ) : (
          <div className="transactions-list">

            {transactions.map((transaction) => (

              <div
                className="transaction-card"
                key={transaction._id}
              >

                <div
                  className={`transaction-icon ${
                    transaction.type === "income"
                      ? "income"
                      : "expense"
                  }`}
                >
                  {transaction.type === "income"
                    ? "↑"
                    : "↓"}
                </div>

                <div className="transaction-info">
                  <h3>{transaction.description}</h3>

                  <p>
                    {transaction.type === "income"
                      ? "Income"
                      : "Expense"}
                  </p>
                </div>

                <div
                  className={`transaction-amount ${
                    transaction.type === "income"
                      ? "income-text"
                      : "expense-text"
                  }`}
                >
                  {transaction.type === "income"
                    ? "+"
                    : "-"}
                  ₹
                  {Number(transaction.amount).toLocaleString(
                    "en-IN"
                  )}
                </div>

                <div className="transaction-actions">

                  <button
                    type="button"
                    className="edit-button"
                    onClick={() => handleEdit(transaction)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className="delete-button"
                    onClick={() =>
                      handleDelete(transaction._id)
                    }
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>
        )}

      </section>

    </div>
  );
};

export default Transactions;