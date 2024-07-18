"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acceptInvitationRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _changeRequestSatus = require("./changeRequestSatus");
var acceptInvitationRoute = exports.acceptInvitationRoute = {
  path: "/scrimmage/:requestId/accept/",
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
            _context.next = 8;
            return (0, _changeRequestSatus.acceptRequest)(requestId);
          case 8:
            status = _context.sent;
            console.log("invitation-accepted");
            return _context.abrupt("return", res.status(200).json({
              success: true,
              accepted: status
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