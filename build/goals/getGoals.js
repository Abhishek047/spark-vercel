"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGoals = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _hasAdminAccess = require("../permissions/hasAdminAccess");
var getGoals = exports.getGoals = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user) {
    var permissions, allowedGroups, goals;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _hasAdminAccess.hasAdminAccess)({
            userId: user._id
          });
        case 2:
          permissions = _context.sent;
          // console.log(permissions)
          allowedGroups = permissions.map(function (permission) {
            return permission.groupId;
          });
          _context.next = 6;
          return _models.Goal.find({
            $or: [{
              createdById: user._id
            }, {
              player: {
                _id: user._id
              }
            }, {
              teamId: allowedGroups
            }]
          });
        case 6:
          goals = _context.sent;
          return _context.abrupt("return", goals);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getGoals(_x) {
    return _ref.apply(this, arguments);
  };
}();