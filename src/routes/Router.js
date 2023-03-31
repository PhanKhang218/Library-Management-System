const express = require("express");
const router = express.Router();

const registerRouter = require("./registerRouter");
const loginRouter = require("./loginRouter");

app.use("/api", registerRouter);
app.use("/api", loginRouter);
