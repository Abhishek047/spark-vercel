"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNotificationsForUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var getNotificationsForUser = exports.getNotificationsForUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userId) {
    var userNotifications;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.Notifications.find({
            userId: userId
          }).sort({
            createdAt: -1
          });
        case 2:
          userNotifications = _context.sent;
          return _context.abrupt("return", userNotifications);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getNotificationsForUser(_x) {
    return _ref.apply(this, arguments);
  };
}();