"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupById = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var getGroupById = exports.getGroupById = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(groupId) {
    var group;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.Groups.findById(groupId);
        case 2:
          group = _context.sent;
          if (!group) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", group);
        case 7:
          return _context.abrupt("return", null);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getGroupById(_x) {
    return _ref.apply(this, arguments);
  };
}();