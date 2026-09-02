const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

const transactionRoutes = require("./routes/transactionRoutes");

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to CashFlow API",
    status: "success",
  });
});

app.use("/api/transactions", transactionRoutes);

app.listen(5000, () => {
  console.log("CashFlow Express server running on http://localhost:5000");
});