"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendFeedbackRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _emails = require("../emails");
var sendFeedbackRoute = exports.sendFeedbackRoute = {
  path: "/feedback",
  method: "post",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$body, email, feedback, emailText;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, feedback = _req$body.feedback;
            _context.prev = 1;
            emailText = "\n            Email: \"".concat(email, "\".\n            Feedback: ").concat(feedback, ",\n            ");
            _context.next = 5;
            return (0, _emails.sendEmail)({
              to: _emails.FROM_CUSTOMER_SERVICE,
              from: _emails.FROM_CUSTOMER_SERVICE,
              subject: "Feedback from ".concat(email),
              body: emailText
            });
          case 5:
            return _context.abrupt("return", res.status(200).json({
              message: "Email Sent"
            }));
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json("Help!!");
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};