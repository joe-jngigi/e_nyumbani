const express = require("express");
const router = express.Router();
const { createProducts } = require("../controllers/productControllers");

/* GET home page. */
router.get("/", createProducts);

module.exports = router;
