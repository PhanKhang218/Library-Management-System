const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
// CORS
const cors = require("cors");
app.use(cors());

// cấu hình body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const users = [
  {
    id: 1,
    user_id: 1,
    role_id: 1,
    username: "nguyentrieutien@gmail.com",
    password: "123456",
    fullname: "Nguyen Thanh Tung",
    email: "nguyentrieutien@gmail.com",
    name: "ADMIN",
  },
  {
    id: 2,
    user_id: 2,
    role_id: 2,
    username: "namkhangphan218@gmail.com",
    password: "123456",
    fullname: "Nguyen Thanh Tung",
    email: "namkhangphan218@gmail.com",
    name: "ADMIN",
  },
];

// định nghĩa API đăng nhập
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // kiểm tra thông tin đăng nhập
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  // trả về phản hồi thành công
  res.json({ message: "Login success" });
});

app.get("/login", function (req, res) {
  res.send("This is the login page.");
});
// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    return res.status(200).json({});
  }
  next();
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
