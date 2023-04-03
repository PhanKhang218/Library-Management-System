const router = require("express").Router();
const RegisterController = require("../controllers/RegisterController");
const jwt = require("jsonwebtoken");
router.post("/register", RegisterController.register);
router.get("/check", RegisterController.check);
router.get(
  "/home",
  function (req, res, next) {
    try {
      const token = req.headers.token;
      const result = jwt.verify(token, "login");
      req.info = result;
      next();
    } catch (error) {
      return res.json({ statusCode: 404, message: "unauthorized" });
    }
  },
  function (req, res) {
    console.log(req.info);
    return res.json({ message: "This is home!" });
  }
);
module.exports = router;
