"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlayerByGoalId = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
// MONGO_DB MIGTATION

var getPlayerByGoalId = exports.getPlayerByGoalId = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
    var goal;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.Goal.findById(id).populate('player').lean();
        case 2:
          goal = _context.sent;
          if (goal) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", null);
        case 5:
          return _context.abrupt("return", goal.player);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getPlayerByGoalId(_x) {
    return _ref.apply(this, arguments);
  };
}();