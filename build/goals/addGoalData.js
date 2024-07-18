"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addGoalData = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var addGoalData = exports.addGoalData = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(goalId, data) {
    var goal, updatedGoal;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.Goal.findById(goalId).populate('player');
        case 2:
          goal = _context.sent;
          if (goal) {
            goal.data = data || goal.data;
          }
          _context.next = 6;
          return goal.save();
        case 6:
          updatedGoal = _context.sent;
          return _context.abrupt("return", updatedGoal);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addGoalData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();