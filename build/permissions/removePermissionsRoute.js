"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removePermissionsRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _hasPermission = require("./hasPermission");
var _removePermission = require("./removePermission");
var removePermissionsRoute = exports.removePermissionsRoute = {
  path: '/permissions',
  method: 'delete',
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var requesterAuthId, requesterUser, requesterId, _req$body, targetUserId, groupId, permissionTypes, canRemovePermissions;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // 1. Who's sending this request? (We need to translate their authId to an actual userId)
            requesterAuthId = req.user.uid;
            _context.next = 3;
            return (0, _users.getUserByAuthId)(requesterAuthId);
          case 3:
            requesterUser = _context.sent;
            requesterId = requesterUser.id;
            _req$body = req.body, targetUserId = _req$body.userId, groupId = _req$body.groupId, permissionTypes = _req$body.permissionTypes; // 2. Are they allowed to remove permissions for this group? i.e. are they an ADMIN?
            _context.next = 8;
            return (0, _hasPermission.hasPermission)({
              userId: requesterId,
              groupId: groupId,
              permissionType: _removePermission.ADMIN
            });
          case 8:
            canRemovePermissions = _context.sent;
            if (canRemovePermissions) {
              _context.next = 11;
              break;
            }
            return _context.abrupt("return", res.status(401).json({
              message: 'User must be an admin to change permissions for group'
            }));
          case 11:
            _context.prev = 11;
            _context.next = 14;
            return Promise.all(permissionTypes.map(function (permissionType) {
              return (0, _removePermission.removePermission)({
                userId: targetUserId,
                groupId: groupId,
                permissionType: permissionType
              });
            }));
          case 14:
            res.sendStatus(200);
            _context.next = 20;
            break;
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](11);
            res.status(500).json(_context.t0.message);
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[11, 17]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};