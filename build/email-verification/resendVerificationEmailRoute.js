"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resendVerificationEmailRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _sendVerificationEmail = require("./sendVerificationEmail");
var _users = require("../users");
var resendVerificationEmailRoute = exports.resendVerificationEmailRoute = {
  path: "/resend-verification/:userId",
  method: "post",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var baseUrl, authId, user, email, confirmationCode;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            baseUrl = req.app.get("baseBackEndUrl");
            console.log("Resend-verification");
            authId = req.params.userId;
            _context.prev = 3;
            _context.next = 6;
            return (0, _users.getUserByAuthId)(authId);
          case 6:
            user = _context.sent;
            email = user.email, confirmationCode = user.confirmationCode;
            console.log(user._id);
            _context.next = 11;
            return (0, _sendVerificationEmail.sendVerificationEmail)({
              email: email,
              confirmationCode: confirmationCode,
              baseVerificationUrl: baseUrl
            });
          case 11:
            return _context.abrupt("return", res.sendStatus(200));
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0.emssage);
            return _context.abrupt("return", res.sendStatus(500));
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 14]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};