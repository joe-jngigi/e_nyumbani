const asyncHandler = require("express-async-handler");

const createProducts = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: "Product Routes perfect" });
});

module.exports = { createProducts };
