const db = require("./../models/index");
const bcrypt = require("bcrypt");
class RegisterController {
  async register(req, res) {
    try {
      let email = req.body.email;
      email = await bcrypt.hash(email, 10);
      const user = await db.User.create({ ...req.body, email });
      return res.json({ user });
    } catch (error) {
      console.log(error);
      res.json({ error: error });
    }
  }
  async check(req, res) {
    const check = await bcrypt.compare(
      "Ngo Thi Hong",
      "$2b$10$kdZ5XN7aW0AhqMXdlmPjPO./c2vnB099/pj4YCA7XulMQ3RVVD992"
    );
    return res.json({ check });
  }
}

module.exports = new RegisterController();
