"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendInvitationEmail = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _emails = require("../emails");
var _util = require("../util");
var sendInvitationEmail = exports.sendInvitationEmail = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var email, groupName, schoolName, confirmationCode, baseUrl, confirmationUrl, subject, emailText;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          email = _ref.email, groupName = _ref.groupName, schoolName = _ref.schoolName, confirmationCode = _ref.confirmationCode, baseUrl = _ref.baseUrl;
          confirmationUrl = "".concat(baseUrl, "/invitations/confirm?code=").concat(confirmationCode);
          subject = "Invitation to join ".concat(groupName, " at ").concat(schoolName);
          emailText = "\n        Hi,\n\n        You've been invited to join \"".concat(groupName, "\".\n        Click here to accept this invitation: ").concat(confirmationUrl, "\n\n        Thanks!\n\n        Spark Esports\n    ");
          _context.next = 6;
          return (0, _emails.sendEmail)({
            to: email,
            from: _emails.FROM_CUSTOMER_SERVICE,
            subject: subject,
            body: emailText
          });
        case 6:
          return _context.abrupt("return", _context.sent);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function sendInvitationEmail(_x) {
    return _ref2.apply(this, arguments);
  };
}();