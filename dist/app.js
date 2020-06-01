"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

var _database = _interopRequireDefault(require("./database"));

var _cors = _interopRequireDefault(require("./cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

const configureExpress = () => {
  app.use(_bodyParser.default.urlencoded({
    extended: true
  }));
  app.use(_bodyParser.default.json());
  app.use(_cors.default);
  app.use('/', _routes.default);
  app.database = _database.default;
  return app;
};

var _default = async () => {
  const app = configureExpress();
  await app.database.connect();
  return app;
};

exports.default = _default;