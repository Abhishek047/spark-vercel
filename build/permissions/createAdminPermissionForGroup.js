"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAdminPermissionForGroup = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _addPermission = require("./addPermission");
var _permissionTypes = require("./permissionTypes");
var createAdminPermissionForGroup = exports.createAdminPermissionForGroup = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var userId, groupId;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          userId = _ref.userId, groupId = _ref.groupId;
          if (!(!userId || !groupId)) {
            _context.next = 3;
            break;
          }
          throw new Error("please-provide-all-fields");
        case 3:
          console.log("ADMIN permission created");
          _context.next = 6;
          return (0, _addPermission.addPermission)({
            userId: userId,
            groupId: groupId,
            permissionType: _permissionTypes.ADMIN
          });
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createAdminPermissionForGroup(_x) {
    return _ref2.apply(this, arguments);
  };
}();