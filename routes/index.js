const loginRoute = require("./login");
const registerRoute = require("./register");
const usersRoute = require("./users");
module.exports = routes = (app) => {
  app.use("/api", loginRoute);
  app.use("/api", registerRoute);
  app.use("/api", usersRoute);
};
