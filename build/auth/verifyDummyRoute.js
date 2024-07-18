"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyDummyRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _emailVerification = require("../email-verification");
var _models = require("../models");
var verifyDummyRoute = exports.verifyDummyRoute = {
  method: "get",
  path: "/dummy-verify",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var email, baseUrl, user;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            email = req.query.email;
            if (!email) {
              _context.next = 13;
              break;
            }
            console.log("hist");
            baseUrl = req.app.get("baseFrontEndUrl");
            _context.next = 7;
            return _models.Users.findOne({
              email: email
            }).lean();
          case 7:
            user = _context.sent;
            _context.next = 10;
            return (0, _emailVerification.verifyUser)(user.confirmationCode);
          case 10:
            res.redirect("".concat(baseUrl, "/verification-result?code=ok"));
            _context.next = 14;
            break;
          case 13:
            return _context.abrupt("return", res.status(500).json({
              msg: "no-email"
            }));
          case 14:
            _context.next = 19;
            break;
          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500));
          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 16]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};
// "http://localhost:8080/api/dummy-verify?email=newuser1@email.com"