const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

// get all products
const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

//get a single product
const getProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json({ product });
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

//create a product
const createProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ product });
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

//update a product
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    // can't find product in database
    if (!product) {
      res.status(404);
      throw new Error(`Product not found. ${id}`);
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json({ updatedProduct });
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

//delete a product
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    // can't find product in database
    if (!product) {
      res.status(404);
      throw new Error(`Product not found. ${id}`);
    }
    res.status(200).json({ product });
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
