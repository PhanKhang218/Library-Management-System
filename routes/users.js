const router = require("express").Router();
const UserController = require("../controllers/UserController");
router.get("/users", UserController.getAllUser);
module.exports = router;
