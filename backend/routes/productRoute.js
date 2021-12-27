const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/productController");
const { isUserAuthenticated, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router
  .route("/products")
  .get(isUserAuthenticated, authorizeRoles("admin"), getAllProducts);
router
  .route("/products/new")
  .post(isUserAuthenticated, authorizeRoles("admin"), createProduct);

router.route("/products/:id").put(isUserAuthenticated, updateProduct);

router
  .route("/products/:id")
  .delete(isUserAuthenticated, deleteProduct)
  .get(getProduct);

module.exports = router;
