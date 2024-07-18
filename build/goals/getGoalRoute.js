"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGoalRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _getGoal = require("./getGoal");
var getGoalRoute = exports.getGoalRoute = {
  path: '/goal/:goalId',
  method: 'get',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var goalId, goal;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            goalId = req.params.goalId;
            _context.next = 4;
            return (0, _getGoal.getGoal)(goalId);
          case 4:
            goal = _context.sent;
            return _context.abrupt("return", res.status(200).json(goal[0]));
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: _context.t0.message
            }));
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};