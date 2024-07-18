"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGoal = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var createGoal = exports.createGoal = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var goalName, teamId, game, startDate, endDate, player, metric, result, createdById, newGoal;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          goalName = _ref.goalName, teamId = _ref.teamId, game = _ref.game, startDate = _ref.startDate, endDate = _ref.endDate, player = _ref.player, metric = _ref.metric, result = _ref.result, createdById = _ref.createdById;
          newGoal = new _models.Goal({
            goalName: goalName,
            teamId: teamId,
            game: game,
            startDate: startDate,
            endDate: endDate,
            player: player,
            metric: metric,
            result: result,
            createdById: createdById
          });
          _context.next = 4;
          return newGoal.save();
        case 4:
          return _context.abrupt("return", newGoal._id);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createGoal(_x) {
    return _ref2.apply(this, arguments);
  };
}();