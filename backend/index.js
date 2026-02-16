require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { MONGO_URL, PORT } = process.env;
const connectDB = require("./config/db");
const authRoute = require("./Routes/AuthRoute");

connectDB();
const app = express();

app.use(
  cors({
    origin: ["http://localhost:4000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);





app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
