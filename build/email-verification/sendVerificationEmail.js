"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendVerificationEmail = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _emails = require("../emails");
var sendVerificationEmail = exports.sendVerificationEmail = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var email, confirmationCode, baseVerificationUrl;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          email = _ref.email, confirmationCode = _ref.confirmationCode, baseVerificationUrl = _ref.baseVerificationUrl;
          _context.next = 3;
          return (0, _emails.sendEmail)({
            from: "Spark Customer Service <customerservice@sparkesports.gg>",
            to: email,
            subject: "Email confirmation",
            body: "Thanks for signing up. Please confirm your email by clicking here: ".concat(baseVerificationUrl, "/verify?code=").concat(confirmationCode)
          });
        case 3:
          return _context.abrupt("return", _context.sent);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function sendVerificationEmail(_x) {
    return _ref2.apply(this, arguments);
  };
}();