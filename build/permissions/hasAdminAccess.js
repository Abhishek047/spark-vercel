"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasAdminAccess = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _permissionTypes = require("./permissionTypes");
var hasAdminAccess = exports.hasAdminAccess = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var userId, permissionExists;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          userId = _ref.userId;
          _context.next = 3;
          return _models.Permissions.find({
            userId: userId,
            permission_type: [_permissionTypes.ADMIN, _permissionTypes.CAPTAIN]
          }).lean();
        case 3:
          permissionExists = _context.sent;
          return _context.abrupt("return", permissionExists);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function hasAdminAccess(_x) {
    return _ref2.apply(this, arguments);
  };
}();