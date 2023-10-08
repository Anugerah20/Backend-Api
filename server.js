const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/productsModel");

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
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
  res.send("About Us");
});

// Edit Product
app.put("/products/:id", async(req, res) => {
  try {
    const {id} = req.params;
    const products = await Product.findByIdAndUpdate(id, req.body);

    if(!products) {
      return res.status(404).json({message: `Cannot find any product with ID ${id}`})
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Product By ID
app.delete("/products/:id", async(req, res) => {
  try {
      const {id} = req.params;
      const products = await Product.findByIdAndDelete(id);

      if(!products) {
        return res.status(500).json({message: `Cannot find any product with ID ${id}`});
      }
      res.status(200).json(products);

  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

// Get Producy By ID
app.get("/products/:id", async(req, res) => {
  try {
    const {id} = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Get All Products
app.get("/products", async(req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Post Products
app.post("/products", async(req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(product)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Page 404
app.use((req, res) => {
  res.status(404).send("404 Page Not Found");
});
