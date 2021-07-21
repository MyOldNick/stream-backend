const controller = require("../../controllers/users/users.controller");
const { authJwt } = require("../../helpers/");

module.exports = function(app) {
  app.post(
    "/api/userAll",
    controller.userAll
  );

  app.post("/api/userPrivate",[authJwt.verifyToken],controller.userPrivate);
};