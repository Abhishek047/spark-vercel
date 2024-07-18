"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteGoalData = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var deleteGoalData = exports.deleteGoalData = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(goalId, dataId) {
    var goal, i, updatedGoal;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.Goal.findById(goalId).populate('player');
        case 2:
          goal = _context.sent;
          if (!goal) {
            _context.next = 12;
            break;
          }
          i = 0;
        case 5:
          if (!(i < goal.data.length)) {
            _context.next = 12;
            break;
          }
          if (!(goal.data[i]._id == dataId)) {
            _context.next = 9;
            break;
          }
          goal.data.splice(i, 1);
          return _context.abrupt("break", 12);
        case 9:
          i++;
          _context.next = 5;
          break;
        case 12:
          _context.next = 14;
          return goal.save();
        case 14:
          updatedGoal = _context.sent;
          return _context.abrupt("return", updatedGoal);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function deleteGoalData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();