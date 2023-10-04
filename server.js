const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/productsModel");

// Middleware
app.use(express.json());
require("dotenv").config();

const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

// Mongodb connect
mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://${db_username}:${db_password}@nodeapi.twsmmh3.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connect Mongodb");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Route
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About Nabil");
});

// Post Product
app.post("/product", async(req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(product)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message });
  }
});

// Page 404
app.use((req, res) => {
  res.status(404).send("404 Page Not Found");
});
