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

//get single product details
exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(500).json({
        success: false,
        message: "Product does not exist",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(400).send();
  }
};

//update product --ADMIN
exports.updateProduct = async (req, res, next) => {
  try {
    let toBeUpdated = await Product.findById(req.params.id);

    if (!toBeUpdated) {
      return res.status(500).json({
        success: false,
        message: "Product not found",
      });
    }

    toBeUpdated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      toBeUpdated,
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(400).send(error.message);
  }
};

//delete a product - ADMIN

exports.deleteProduct = async (req, res, next) => {
  try {
    const toBeDeleted = await Product.findById(req.params.id);

    if (!toBeDeleted) {
      return res.status(500).json({
        success: false,
        message: "Product not found",
      });
    }

    await toBeDeleted.remove();

    res.status(200).json({
      success: true,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(400).send(error.message);
  }
};
