const express = require("express");
const Product = require("../models/productsModel");
const route = express.Router();

// Edit Product
route.put("/:id", async(req, res) => {
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
route.delete("/:id", async(req, res) => {
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
route.get("/:id", async(req, res) => {
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
route.get("/", async(req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Post Products
route.post("/", async(req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(product)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = route;
