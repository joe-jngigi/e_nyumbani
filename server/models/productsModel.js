const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add product name"],
    },
    price: {
      type: String,
      required: [true, "Please add product price"],
    },
    image: {
      type: String,
      required: [true, "Please add product image"],
    },
    colors: {
      type: Array,
      required: [true, "Please add product colors"],
    },
    company: {
      type: String,
      required: [true, "Please add product company"],
    },
    description: {
      type: String,
      required: [true, "Please add product description"],
    },
    category: {
      type: String,
      required: [true, "Please add product category"],
    },
    shipping: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
