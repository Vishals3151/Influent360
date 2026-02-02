require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDb = require("./config/db");
const app = express();
const port = process.env.PORT || 5000;

connectDb();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
