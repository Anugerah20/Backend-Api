const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const productRoute = require("./routes/productRoute")

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
require("dotenv").config();
app.use(cors());

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

// Mongodb connect
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connect Mongodb");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Route
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Backend API");
});

// Page 404
app.use((req, res) => {
  res.status(404).send("404 Page Not Found");
});
