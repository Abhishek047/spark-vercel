"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteGoal = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _hasAdminAccess = require("../permissions/hasAdminAccess");
var deleteGoal = exports.deleteGoal = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var goalId, userId, permissions, allowedGroups, goal;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          goalId = _ref.goalId, userId = _ref.userId;
          _context.next = 3;
          return (0, _hasAdminAccess.hasAdminAccess)({
            userId: userId
          });
        case 3:
          permissions = _context.sent;
          // console.log(permissions)
          allowedGroups = permissions.map(function (permission) {
            return permission.groupId;
          });
          _context.next = 7;
          return _models.Goal.findById(goalId);
        case 7:
          goal = _context.sent;
          if (goal) {
            _context.next = 10;
            break;
          }
          throw new Error('goal-not-found');
        case 10:
          if (!(goal.createdById != userId && !allowedGroups.find(function (groupId) {
            if (JSON.stringify(groupId) === JSON.stringify(goal.teamId)) {
              return true;
            }
          }))) {
            _context.next = 12;
            break;
          }
          throw new Error('not-authorized');
        case 12:
          _context.next = 14;
          return _models.Goal.findByIdAndDelete(goalId);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function deleteGoal(_x) {
    return _ref2.apply(this, arguments);
  };
}();