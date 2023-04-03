const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Phan-khang21082001",
  database: "library1",
});

db.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + db.threadId);
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// định nghĩa API đăng nhập
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("username:", username);
  console.log("password:", password);

  if (!username || !password) {
    res
      .status(400)
      .json({ statusCode: 400, message: "Vui lòng nhập đầy đủ thông tin" });
    return;
  }

  // kiểm tra thông tin đăng nhập

  try {
    const [rows, fields] = await db
      .promise()
      .execute("SELECT * FROM User WHERE username = ? AND password = ?", [
        username,
        password,
      ]);

    if (rows.length === 0) {
      return res.status(401).json({
        statusCode: 401,
        message: "Tên đăng nhập hoặc mật khẩu không hợp lệ!",
      });
    }

    // trả về phản hồi thành công
    res.json({ message: "Đăng nhập thành công" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ statusCode: 500, message: "Lỗi máy chủ" });
  }
});

// const port = 5001;

// app.listen(port, () => console.log(`Server started on port ${port}`));
