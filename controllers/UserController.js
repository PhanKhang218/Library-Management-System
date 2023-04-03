const db = require("../models");

class UserController {
  async getAllUser(req, res) {
    try {
      const users = await db.User.findAll({
        include: db.Role,
      });
      return res.json({ users });
    } catch (error) {
      console.log(error);
      return res.json({ error });
    }
  }
}

module.exports = new UserController();
