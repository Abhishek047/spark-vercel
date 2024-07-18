"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyEmailRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _verifyUser = require("./verifyUser");
var verifyEmailRoute = exports.verifyEmailRoute = {
  path: "/verify",
  method: "get",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var code, baseUrl;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            code = req.query.code;
            baseUrl = req.app.get("baseFrontEndUrl");
            if (!code) {
              res.redirect("".concat(baseUrl, "/verification-result?code=err"));
            }
            _context.prev = 3;
            _context.next = 6;
            return (0, _verifyUser.verifyUser)(code);
          case 6:
            res.redirect("".concat(baseUrl, "/verification-result?code=ok"));
            _context.next = 13;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);
            if (_context.t0.message === _verifyUser.USER_NOT_FOUND) {
              res.redirect("".concat(baseUrl, "/verification-result?code=not_found"));
            } else if (_context.t0.message === _verifyUser.EMAIL_ALREADY_VERIFIED) {
              res.redirect("".concat(baseUrl, "/verification-result?code=already_verified"));
            } else {
              res.redirect("".concat(baseUrl, "/verification-result?code=err"));
            }
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 9]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};