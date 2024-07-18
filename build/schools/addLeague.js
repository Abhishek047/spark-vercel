"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addLeague = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var addLeague = exports.addLeague = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var team, game, league, userId, groupId, newLeague;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          team = _ref.team, game = _ref.game, league = _ref.league, userId = _ref.userId, groupId = _ref.groupId;
          newLeague = new _models.League({
            groupId: groupId,
            created_by: userId,
            team: team,
            game: game,
            tournament: league
          });
          _context.next = 4;
          return newLeague.save();
        case 4:
          return _context.abrupt("return", newLeague._id);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addLeague(_x) {
    return _ref2.apply(this, arguments);
  };
}();