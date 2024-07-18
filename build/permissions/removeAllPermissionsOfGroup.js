"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeAllPermissionsOfGroup = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var removeAllPermissionsOfGroup = exports.removeAllPermissionsOfGroup = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var groupId;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          groupId = _ref.groupId;
          _context.next = 3;
          return _models.Permissions.deleteMany({
            groupId: groupId
          });
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function removeAllPermissionsOfGroup(_x) {
    return _ref2.apply(this, arguments);
  };
}();