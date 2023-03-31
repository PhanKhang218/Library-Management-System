const express = require("express");
const router = express.Router();
const db = require("../database/dbConnector");

// định nghĩa API đăng nhập
router.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  // kiểm tra thông tin đăng nhập
  try {
    const [rows, fields] = await db.execute(
      "SELECT * FROM User WHERE username = ? AND password = ?",
      [username, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // trả về phản hồi thành công
    res.json({ message: "Login success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});
