const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeatures");

//create a new product - ADMIN
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

//get all the products
exports.getAllProducts = catchAsyncError(async (req, res) => {
  const resultsPerPage = 5;
  const apifeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultsPerPage);
  const products = await apifeature.query;
  res.status(200).json({
    success: true,
    products,
  });
});

//get single product details
exports.getProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product does not exist", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

//update product --ADMIN
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let toBeUpdated = await Product.findById(req.params.id);

  if (!toBeUpdated) {
    return next(new ErrorHandler("Product does not exist", 404));
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
});

//delete a product - ADMIN

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const toBeDeleted = await Product.findById(req.params.id);

  if (!toBeDeleted) {
    return next(new ErrorHandler("Product does not exist", 404));
  }

  await toBeDeleted.remove();

  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
});
