const express = require("express");
const Transaction = require("../models/Transaction");

const router = express.Router();

// Get all transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      transactions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch transactions",
    });
  }
});

// Add a transaction
router.post("/", async (req, res) => {
  try {
    const { type, amount, description } = req.body;

    const transaction = await Transaction.create({
      type,
      amount,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Transaction added successfully",
      transaction,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;