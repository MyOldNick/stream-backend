const controller = require("../../controllers/auth/auth.controller");

module.exports = function(app) {

  app.post(
    "/api/auth/login",
    controller.login
  );

  app.post("/api/auth/regist",controller.regist);
};