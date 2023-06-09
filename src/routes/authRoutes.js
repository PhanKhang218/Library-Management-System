const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/LoginController");
const authController = require("../controllers/authController");
const BookController = require("../controllers/BookController");
const BookByIdController = require("../controllers/BookByIdController");
router.post("/register", authController.registerUser);
router.post("/login", LoginController.loginUser);
router.get("/books", BookController.Book);
router.get("/books/:id", BookByIdController.BookById);
module.exports = router;
