"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDiscordUrl = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var getDiscordUrl = exports.getDiscordUrl = {
  path: "/discord/url/",
  method: "get",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var baseUrl, loginUrl, linkingUrl;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            baseUrl = req.app.get("baseBackEndUrl");
            loginUrl = "".concat(baseUrl, "/discord/login");
            linkingUrl = "".concat(baseUrl, "/discord/link/");
            console.log("discord link found");
            res.status(200).json({
              loginUrl: loginUrl,
              linkingUrl: linkingUrl
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};