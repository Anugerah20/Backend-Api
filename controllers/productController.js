const { validationProduct } = require("../middleware/productMiddleware");
const Product = require("../models/productsModel");

// Get All Product
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Get Product By Id
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    validationProduct(req, res, async () => {
      const product = await Product.create(req.body);
      res.status(200).json({
        product,
        message: "Berhasil membuat product"
      });
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Update  Product
const updatedProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findByIdAndUpdate(id, req.body);

    if (!products) {
      return res.status(404).json({ message: `Cannot find any product with ID ${id}` });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json({
      message: "Product berhasil di edit"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findByIdAndDelete(id);

    if (!products) {
      return res.status(500).json({ message: `Cannot find any product with ID ${id}` });
    }
    res.status(200).json({
      message: "Product berhasil di hapus",
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updatedProduct,
  deleteProduct
}