const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  resetPassword,
} = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/reset").post(resetPassword);
router.route("/logout").get(logout);

module.exports = router;
