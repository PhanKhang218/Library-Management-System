const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("../routes");

const app = express();
const port = 5001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);

app.use(cors());
app.listen(port, () => console.log(`Server started on port ${port}`));
