"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGoal = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var getGoal = exports.getGoal = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(goalId, userId) {
    var goal;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.Goal.find({
            _id: goalId
          }).populate('player').lean();
        case 2:
          goal = _context.sent;
          return _context.abrupt("return", goal);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getGoal(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();