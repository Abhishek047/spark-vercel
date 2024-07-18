"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changePermissionRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _validPermission = require("../models/validPermission");
var _hasPermission = require("./hasPermission");
var _createCaptain = require("./createCaptain");
var _makePlayer = require("./makePlayer");
var _permissionTypes = require("./permissionTypes");
var changePermissionRoute = exports.changePermissionRoute = {
  path: "/permissions/captain",
  method: "post",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var requesterAuthId, requesterUser, requesterId, _req$body, targetUserId, groupId, permission, canAddPermission;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // 1. Who's sending this request? (We need to translate their authId to an actual userId)
            requesterAuthId = req.user.uid;
            _context.next = 4;
            return (0, _users.getUserByAuthId)(requesterAuthId);
          case 4:
            requesterUser = _context.sent;
            requesterId = requesterUser._id;
            _req$body = req.body, targetUserId = _req$body.userId, groupId = _req$body.groupId, permission = _req$body.permission; // 2. Are they allowed to add permissions for this group? i.e. are they an ADMIN?
            _context.next = 9;
            return (0, _hasPermission.hasPermission)({
              userId: requesterId,
              groupId: groupId,
              permissionType: _permissionTypes.ADMIN
            });
          case 9:
            canAddPermission = _context.sent;
            if (canAddPermission) {
              _context.next = 12;
              break;
            }
            return _context.abrupt("return", res.sendStatus(401));
          case 12:
            if (_validPermission.VALID_PERMISSIONS.includes(permission)) {
              _context.next = 14;
              break;
            }
            return _context.abrupt("return", res.send(404).json({
              success: true,
              message: "Permission not found"
            }));
          case 14:
            _context.t0 = permission;
            _context.next = _context.t0 === _permissionTypes.PLAYER ? 17 : _context.t0 === _permissionTypes.CAPTAIN ? 20 : 23;
            break;
          case 17:
            _context.next = 19;
            return (0, _makePlayer.makePlayer)({
              userId: targetUserId,
              groupId: groupId
            });
          case 19:
            return _context.abrupt("break", 25);
          case 20:
            _context.next = 22;
            return (0, _createCaptain.createCaptian)({
              userId: targetUserId,
              groupId: groupId
            });
          case 22:
            return _context.abrupt("break", 25);
          case 23:
            console.log("no-permission-change");
            return _context.abrupt("break", 25);
          case 25:
            return _context.abrupt("return", res.status(200).json({
              success: true
            }));
          case 28:
            _context.prev = 28;
            _context.t1 = _context["catch"](0);
            console.log(_context.t1.message);
            return _context.abrupt("return", res.status(500).json(_context.t1.message));
          case 32:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 28]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};