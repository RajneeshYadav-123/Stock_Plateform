require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const userRouter = require("./route/User");

const app = express();

const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;

app.use(
  cors({
    origin: [
      "https://stock-plateform-p913.vercel.app/pricing",
      "https://stock-plateform-f83i.vercel.app/",
    ],
    credentials: true,
  })
);


app.use(express.json());


app.use("/user", userRouter);

app.get("/allHoldings", async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.status(200).json(holdings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.status(200).json(positions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching positions" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order saved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Order saving failed" });
  }
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });

module.exports=app;