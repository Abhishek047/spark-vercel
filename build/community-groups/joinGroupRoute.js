"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinGroupRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _permissions = require("../permissions/");
var _joinGroup = require("./joinGroup");
var joinGroupRoute = exports.joinGroupRoute = {
  method: "post",
  path: "/community-group/:organizationId/join/",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var groupCode, organizationId, authUser, user, permission, groupId;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            groupCode = req.body.groupCode;
            organizationId = req.params.organizationId;
            authUser = req.user;
            _context.prev = 3;
            _context.next = 6;
            return (0, _users.getUserByAuthId)(authUser.user_id);
          case 6:
            user = _context.sent;
            _context.next = 9;
            return (0, _permissions.hasPermission)({
              userId: user._id,
              groupId: organizationId,
              permissionType: _permissions.ADMIN
            });
          case 9:
            permission = _context.sent;
            if (permission) {
              _context.next = 12;
              break;
            }
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "You do not have required permission to join the group"
            }));
          case 12:
            console.log("Joining");
            _context.next = 15;
            return (0, _joinGroup.joinGroup)({
              organizationId: organizationId,
              groupCode: groupCode
            });
          case 15:
            groupId = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              success: true,
              groupId: groupId
            }));
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0.message);
            if (!(_context.t0.message === "no-org-found")) {
              _context.next = 24;
              break;
            }
            return _context.abrupt("return", res.status(404).json({
              success: false,
              message: "Your organization not found"
            }));
          case 24:
            if (!(_context.t0.message === "no-group-found")) {
              _context.next = 26;
              break;
            }
            return _context.abrupt("return", res.status(404).json({
              success: false,
              message: "No groupexist"
            }));
          case 26:
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "Server error"
            }));
          case 27:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 19]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};