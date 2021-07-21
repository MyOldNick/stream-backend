const controller = require("../../controllers/auth/auth.controller");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

module.exports = function(app) {

  app.post(
    "/api/auth/login",jsonParser,
    controller.login
  );

  app.post("/api/auth/regist",jsonParser,controller.regist);
};