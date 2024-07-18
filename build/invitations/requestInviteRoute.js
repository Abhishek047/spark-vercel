"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestInviteRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _emails = require("../emails");
var requestInviteRoute = exports.requestInviteRoute = {
  path: "/request-invite",
  method: "post",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$body, email, organisation, type, level, refer, text, subject;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, organisation = _req$body.organisation, type = _req$body.type, level = _req$body.level, refer = _req$body.refer;
            text = "Email : ".concat(email, " has requested an invite.\n                    Organization : ").concat(organisation, "\n                    User: ").concat(type, "\n                    Organization Level: ").concat(level, "\n                    Refered From : ").concat(refer, "\n        ");
            subject = "Requested Invite";
            _context.prev = 3;
            _context.next = 6;
            return (0, _emails.sendEmail)({
              to: _emails.FROM_CUSTOMER_SERVICE,
              from: _emails.FROM_CUSTOMER_SERVICE,
              subject: subject,
              body: text
            });
          case 6:
            _context.next = 12;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);
            res.status(404).json("Failed to send invite");
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 8]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};