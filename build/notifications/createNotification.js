"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNotification = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var createNotification = exports.createNotification = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var userId, message, createdAt, newEvent;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          userId = _ref.userId, message = _ref.message, createdAt = _ref.createdAt;
          newEvent = new _models.Notifications({
            userId: userId,
            message: message,
            createdAt: createdAt
          });
          _context.next = 4;
          return newEvent.save();
        case 4:
          return _context.abrupt("return", newEvent._id);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createNotification(_x) {
    return _ref2.apply(this, arguments);
  };
}();