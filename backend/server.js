const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());
const itemRoutes = require("./routes/itemRoutes");
app.use("/api/items", itemRoutes);

mongoose.connect(process.env.MONGO_URI, {
})
.then(() => {
  console.log("✅ Connected to MongoDB");
  app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
})
.catch(err => console.error("❌ MongoDB connection failed:", err));
