const db = require("../database/dbConnector");

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  console.log("username:", username);
  console.log("password:", password);

  if (!username || !password) {
    res
      .status(400)
      .json({ statusCode: 400, message: "Vui lòng nhập đầy đủ thông tin" });
    return;
  }

  // Kiểm tra thông tin đăng nhập
  try {
    const [rows, fields] = await db
      .promise()
      .execute(
        "SELECT id, username, fullname, email FROM User WHERE username = ? AND password = ?",
        [username, password]
      );

    if (rows.length === 0) {
      return res.status(401).json({
        statusCode: 401,
        message: "Tên đăng nhập hoặc mật khẩu không hợp lệ!",
      });
    }

    // Trả về thông tin người dùng
    const user = rows[0];
    res.json([
      {
        id: user.id,
        username: user.username,
        fullname: user.fullname,
        email: user.email,
        message: "Đăng nhập thành công",
      },
    ]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ statusCode: 500, message: "Lỗi máy chủ" });
  }
};
