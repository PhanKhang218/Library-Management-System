const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Phan-khang21082001",
  database: "library",
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting: " + error.stack);
    return;
  }

  console.log("Connected to database.");
});
