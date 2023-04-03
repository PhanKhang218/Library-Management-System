const db = require("../database/dbConnector");

exports.registerUser = (req, res) => {
  const { username, email, fullname, password, confirmpassword } = req.body;

  console.log("username:", username);
  console.log("email:", email);
  console.log("fullname:", fullname);
  console.log("password:", password);
  console.log("confirmpassword:", confirmpassword);

  // check enter full fields
  if (!username || !email || !fullname || !password || !confirmpassword) {
    res
      .status(400)
      .json({ statusCode: 400, message: "Vui lòng nhập đầy đủ thông tin" });
    return;
  }

  // Check username exists
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
    }

    // check password
    if (password !== confirmpassword) {
      res.status(400).json({
        statusCode: 400,
        message: "Mật khẩu không khớp, vui lòng nhập lại",
      });
      return;
    }

    // add user vào CSDL
    const insertQuery =
      "INSERT INTO USER (username, email, fullname, password,confirmpassword) VALUES (?, ?, ?, ?, ?)";
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
};
