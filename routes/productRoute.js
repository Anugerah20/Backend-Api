const express = require("express");
const route = express.Router();
const { getProducts, getProduct, createProduct, updatedProduct, deleteProduct } = require("../controllers/productController");
const { validationProduct } = require("../middleware/productMiddleware");

// Get Producy By ID
route.get("/:id", getProduct);

// Get All Products
route.get("/", getProducts);

// Edit Product
route.put("/:id", updatedProduct);

// Post Products
route.post("/", validationProduct, createProduct);

// Delete Product By ID
route.delete("/:id", deleteProduct);

module.exports = route;
