const router = require("express").Router();
const LoginController = require("./../controllers/LoginController");
router.get("/login", LoginController.login);
router.post("/login", LoginController.handleLogin);
module.exports = router;
