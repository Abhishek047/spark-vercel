"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removePermissions = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var removePermissions = exports.removePermissions = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var userId, groupId, permissionType;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          userId = _ref.userId, groupId = _ref.groupId, permissionType = _ref.permissionType;
          _context.next = 3;
          return _models.Permissions.findOneAndDelete({
            userId: userId,
            groupId: groupId,
            permission_type: permissionType
          });
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function removePermissions(_x) {
    return _ref2.apply(this, arguments);
  };
}();