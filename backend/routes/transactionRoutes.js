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

// Get a single transaction by ID
router.get("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found",
      });
    }

    res.json({
      success: true,
      transaction,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid transaction ID",
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

// Update a transaction
router.put("/:id", async (req, res) => {
  try {
    const { type, amount, description } = req.body;

    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      {
        type,
        amount,
        description,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found",
      });
    }

    res.json({
      success: true,
      message: "Transaction updated successfully",
      transaction,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// Delete a transaction
router.delete("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found",
      });
    }

    res.json({
      success: true,
      message: "Transaction deleted successfully",
      transaction,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid transaction ID",
    });
  }
});

// Export router
module.exports = router;