const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required."],
    },
    description: {
      type: String,
      required: [true, "Product description is required."],
    },
    quantity: {
      type: Number,
      required: [true, "Product quantity is required."],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Product price is required."],
      default: 0,
    },
    image: {
      type: String,
      required: [true, "Product image is required."],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
