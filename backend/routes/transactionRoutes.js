const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    transactions: [
      {
        id: 1,
        type: "income",
        amount: 40000,
        description: "Monthly Salary",
      },
      {
        id: 2,
        type: "expense",
        amount: 15000,
        description: "Monthly Expenses",
      },
    ],
  });
});

router.post("/", (req, res) => {
  const { type, amount, description } = req.body;

  res.json({
    success: true,
    message: "Transaction added successfully",
    transaction: {
      type,
      amount,
      description,
    },
  });
});

module.exports = router;