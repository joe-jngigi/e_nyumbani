const asyncHandler = require("express-async-handler");
const Product = require("../models/productsModel");

// them controllers
// @desc control products
// @route /api/products
// @access private/public

const getProducts = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: "get all Products" });
});
const getProduct = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({ message: `get Product ${id} ` });
});
const createProducts = asyncHandler(async (req, res, next) => {
  const product = req.body;
  res.status(200).json(product);
});
const updateProduct = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({ message: `Product updated ${id}` });
});
const deleteProduct = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({ message: `Product deleted ${id}` });
});

module.exports = {
  getProducts,
  getProduct,
  createProducts,
  updateProduct,
  deleteProduct,
};
