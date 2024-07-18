"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRoster = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _permissions = require("../permissions");
var deleteRoster = exports.deleteRoster = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(rosterId, userId) {
    var roster;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.Groups.findOne({
            _id: rosterId,
            created_by: userId
          });
        case 2:
          roster = _context.sent;
          if (roster) {
            _context.next = 5;
            break;
          }
          throw new Error("not-authorized-to-delete");
        case 5:
          _context.next = 7;
          return roster.deleteOne();
        case 7:
          _context.next = 9;
          return (0, _permissions.removeAllPermissionsOfGroup)({
            groupId: roster._id
          });
        case 9:
          return _context.abrupt("return", roster.created_by === userId);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function deleteRoster(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();