const Product = require("../models/productModel");

//create a new product - ADMIN
exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(400).send();
  }
};

//get all the products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(400).send();
  }
};
