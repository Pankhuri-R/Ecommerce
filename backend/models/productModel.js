const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please give a product name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please give a product description"],
  },
  price: {
    type: Number,
    required: [true, "Please give a product price"],
    maxlength: [6, "Price should not exceed 6 figures"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please give product category"],
  },
  stock: {
    type: Number,
    required: [true, "Please give product stock"],
    maxlength: [3, "Stock cannot exceed figure of 3"],
    default: 1,
  },
  numOfRev: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comments: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
