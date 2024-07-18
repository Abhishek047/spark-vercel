"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acceptInvitationRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _users = require("../users");
var _acceptInvitationByCode = require("./acceptInvitationByCode");
/*
    This is the route that will be hit when a user accepts an invitation by
    clicking on the "accept" button on the InvitationLandingPage
*/
var acceptInvitationRoute = exports.acceptInvitationRoute = {
  path: "/invitations/:confirmationCode/accept",
  method: "post",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var confirmationCode, email, user;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // 1. Get the confirmation code that we generated when we sent the invitation
            confirmationCode = req.params.confirmationCode;
            _context.prev = 1;
            _context.next = 4;
            return (0, _acceptInvitationByCode.acceptInvitationByCode)(confirmationCode);
          case 4:
            email = _context.sent;
            _context.next = 7;
            return (0, _users.getUserByEmail)(email);
          case 7:
            user = _context.sent;
            res.status(200).json({
              email: email,
              isConfirmed: user && user.isConfirmed
            });
            _context.next = 15;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

            // If something went wrong, it probably means there was no corresponding invitation
            if (_context.t0.message == "Not found") {
              res.status(404).json({
                message: "No invitation exists with the corresponding confirmation code"
              });
            } else {
              res.status(500).json({
                message: "Unable to accept invitation"
              });
            }
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 11]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};