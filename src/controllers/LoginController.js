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

    // Respone user
    res.json({ message: "Đăng nhập thành công" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ statusCode: 500, message: "Lỗi máy chủ" });
  }
};
