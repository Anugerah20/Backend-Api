const express = require("express");
const Product = require("../models/productsModel");
const route = express.Router();
const { getProducts, getProduct, createProduct, updatedProduct, deleteProduct } = require("../controllers/productController")

// Edit Product
route.put("/:id", updatedProduct);

// Delete Product By ID
route.delete("/:id", deleteProduct);

// Get Producy By ID
route.get("/:id", getProduct);

// Get All Products
route.get("/", getProducts);

// Post Products
route.post("/", createProduct);

module.exports = route;
