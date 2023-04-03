var jwt = require("jsonwebtoken");
class LoginController {
  async login(req, res) {
    return res.json({ mess: 1 });
  }
  async handleLogin(req, res) {
    var token = jwt.sign({ email: "adasdsa@gmail.com" }, "login", {
      expiresIn: "30s",
    });
    return res.json({ token });
  }
}

module.exports = new LoginController();
