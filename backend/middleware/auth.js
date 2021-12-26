const catchAsyncError = require("./catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isUserAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }

  const decodedData = await jwt.verify(token, process.env.JWT_SECRET);

  req.user = User.findById(decodedData.id);

  next();
});
