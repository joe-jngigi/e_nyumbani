const asyncHandler = require("express-async-handler");
const Product = require("../models/productsModel");

// them controllers
// @desc control products
// @route /api/products
// @access private/public

// get them products
const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json(products);
});

// get a single product
const getProduct = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.status(200).json(product);
});

// create products
const createProducts = asyncHandler(async (req, res, next) => {
  const {
    name,
    price,
    image,
    colors,
    company,
    description,
    category,
    shipping,
  } = req.body;
  if (!name || !price || !colors || !company || !description || !category) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const product = await Product.create({
    name,
    price,
    image,
    colors,
    company,
    description,
    category,
    shipping,
  });

  res.status(200).json(product);
});
// update a product
const updateProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedProduct);
});
// delete a product
const deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }
  await product.remove();
  res.status(200).json({ id: req.params.id, message: "Deleted successfully" });
});

// export them controllers
module.exports = {
  getProducts,
  getProduct,
  createProducts,
  updateProduct,
  deleteProduct,
};
