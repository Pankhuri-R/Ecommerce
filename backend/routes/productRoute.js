const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/productController");
const { isUserAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(isUserAuthenticated, getAllProducts);
router.route("/products/new").post(createProduct);

router.route("/products/:id").put(updateProduct);

router.route("/products/:id").delete(deleteProduct).get(getProduct);

module.exports = router;
