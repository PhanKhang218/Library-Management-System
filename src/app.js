const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const registerRoutes = require("./routes/registerRoutes");
const loginRoutes = require("./routes/loginRoutes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/register", registerRoutes);
app.use("/api/login", loginRoutes);

module.exports = app;
