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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/api/register", (req, res) => {
  const { username, email, fullname, password, confirmpassword } = req.body;

  console.log("username:", username);
  console.log("email:", email);
  console.log("fullname:", email);
  console.log("password:", password);
  console.log("confirmpassword:", confirmpassword);

  // Kiểm tra xem tất cả các trường đã được nhập đầy đủ hay không
  if (!username || !email || !fullname || !password || !confirmpassword) {
    res
      .status(400)
      .json({ statusCode: 400, message: "Vui lòng nhập đầy đủ thông tin" });
    return;
  }

  // Kiểm tra xem username đã tồn tại hay chưa
  const checkQuery = "SELECT * FROM USER WHERE username = ?";
  db.query(checkQuery, [username], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({
        statusCode: 500,
        message: "Có lỗi xảy ra, vui lòng thử lại sau",
      });
      return;
    }

    if (results.length > 0) {
      res.status(400).json({
        statusCode: 400,
        message: "Tên đăng nhập đã tồn tại, vui lòng đặt tên đăng nhập khác",
      });
      return;
    } // Kiểm tra xem mật khẩu và xác nhận mật khẩu có khớp hay không
    if (password !== confirmpassword) {
      res.status(400).json({
        statusCode: 400,
        message: "Mật khẩu không khớp, vui lòng nhập lại",
      });
      return;
    }

    // Tiến hành thêm mới user vào CSDL
    const insertQuery =
      "INSERT INTO USER (username, email, fullname, password,confirmpassword) VALUES (?, ?, ?, ?,?)";
    db.query(
      insertQuery,
      [username, email, fullname, password, confirmpassword],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({
            statusCode: 500,
            message: "Có lỗi xảy ra, vui lòng thử lại sau",
          });
          return;
        }
        console.log(result);
        res.json({ success: true });
      }
    );
  });
});

const port = 5001;

app.listen(port, () => console.log(`Server started on port ${port}`));
