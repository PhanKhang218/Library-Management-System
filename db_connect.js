const mysql = require("mysql2");
var http = require("http");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Phan-khang21082001",
  database: "library1",
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting: " + error.stack);
    return;
  }
  console.log("Connected to database.");
});
http
  .createServer(function (req, res) {
    // if (req.url == "/user") {
    connection.query(
      "SELECT * FROM User_Role INNER JOIN User on User.id = User_Role.user_id INNER JOIN Role on User_Role.role_id = Role.id",
      function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result));
      }
    );
    // }
    // res.end(JSON.stringify({ message: "Other tasks" }));
  })
  .listen(3000);
