const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/LoginController");
const authController = require("../controllers/authController");

router.post("/register", authController.registerUser);
router.post("/login", LoginController.loginUser);

module.exports = router;
