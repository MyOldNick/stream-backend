const controller = require("../../controllers/users/users.controller");
const { authJwt } = require("../../helpers/");

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

module.exports = function(app) {
  app.post(
    "/api/userAll",jsonParser,
    controller.userAll
  );

  app.post("/api/userPrivate",jsonParser,[authJwt.verifyToken],controller.userPrivate);
};