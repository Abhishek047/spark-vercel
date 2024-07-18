"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.declineInvitationRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _changeRequestSatus = require("./changeRequestSatus");
var declineInvitationRoute = exports.declineInvitationRoute = {
  path: "/scrimmage/:requestId/decline/",
  method: "post",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, user, requestId, status;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authUser = req.user;
            _context.prev = 1;
            _context.next = 4;
            return (0, _users.getUserByAuthId)(authUser.user_id);
          case 4:
            user = _context.sent;
            // ----
            // Check permission
            // ----
            requestId = req.params.requestId;
            console.log("invitation-declined");
            _context.next = 9;
            return (0, _changeRequestSatus.declineRequest)(requestId);
          case 9:
            status = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              success: true,
              declined: status
            }));
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: _context.t0.message
            }));
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 13]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};