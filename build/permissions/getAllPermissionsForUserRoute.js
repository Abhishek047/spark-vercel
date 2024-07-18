"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllPermissionsForUserRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _getAllPermissions = require("./getAllPermissions");
var _models = require("../models");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var getAllPermissionsForUserRoute = exports.getAllPermissionsForUserRoute = {
  method: "get",
  path: "/:userId/permissions",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var userId, allPermissions, basicAllPermissionObject, groupedByGroupId;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            userId = req.params.userId;
            _context.prev = 1;
            _context.next = 4;
            return (0, _getAllPermissions.getAllPermissions)(userId);
          case 4:
            allPermissions = _context.sent;
            basicAllPermissionObject = {};
            _models.VALID_PERMISSIONS.forEach(function (name) {
              basicAllPermissionObject["".concat(name)] = false;
            });
            groupedByGroupId = {};
            allPermissions.forEach(function (permission) {
              var permissionType = permission.permission_type;
              // check if the object for that group is there or not
              if (groupedByGroupId["".concat(permission.groupId)]) {
                // then got to that group.permissiontype and ssign boolean;
                groupedByGroupId["".concat(permission.groupId)]["".concat(permissionType)] = true;
              } else {
                // assign the default value ie. all false in beggening and then
                // turn the permission type to true
                groupedByGroupId["".concat(permission.groupId)] = _objectSpread(_objectSpread({}, basicAllPermissionObject), {}, {
                  id: permission.groupId
                });
                // then got to that group.permissiontype and ssign boolean;
                groupedByGroupId["".concat(permission.groupId)]["".concat(permissionType)] = true;
              }
            });
            return _context.abrupt("return", res.status(200).json({
              permissions: groupedByGroupId
            }));
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              error: _context.t0.message,
              message: "server-error"
            }));
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 12]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};