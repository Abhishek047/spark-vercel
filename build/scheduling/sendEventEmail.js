"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEventEmail = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _emails = require("../emails");
var _util = require("../util");
var sendEventEmail = exports.sendEventEmail = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var email, eventDetails, eventCreatorName, eventCreatorEmail, name, description, date, time, subject, emailText;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          email = _ref.email, eventDetails = _ref.eventDetails, eventCreatorName = _ref.eventCreatorName, eventCreatorEmail = _ref.eventCreatorEmail;
          name = eventDetails.name, description = eventDetails.description, date = eventDetails.date, time = eventDetails.time;
          subject = "New Event Invitation: ".concat(name);
          emailText = "\n        Hi,\n\n        ".concat(eventCreatorName ? "".concat(eventCreatorName, " (").concat(eventCreatorEmail, ")") : eventCreatorEmail, " has invited you to an event:\n\n        ").concat(name, " - ").concat(date.toLocaleDateString(), " @ ").concat(time, "\n        ").concat(description, "\n\n        Thanks!\n\n        Spark Esports\n    ");
          _context.next = 6;
          return (0, _emails.sendEmail)({
            to: email,
            from: 'Spark Esports <noreply@sparkesports.gg>',
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
  return function sendEventEmail(_x) {
    return _ref2.apply(this, arguments);
  };
}();