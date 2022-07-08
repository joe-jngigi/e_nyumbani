const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productControllers");

/* GET home page. */
router.route("/").get(getProducts).post(createProducts);
router.route("/:id").get(getProduct).delete(deleteProduct).put(updateProduct);

module.exports = router;
