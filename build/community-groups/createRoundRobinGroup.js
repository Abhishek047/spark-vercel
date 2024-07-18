"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRoundRobinGroup = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var createRoundRobinGroup = exports.createRoundRobinGroup = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var _ref$tournamentId, tournamentId, _ref$groupName, groupName, _ref$teams, teams, teamsToAdd, newTournamentRound;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _ref$tournamentId = _ref.tournamentId, tournamentId = _ref$tournamentId === void 0 ? "" : _ref$tournamentId, _ref$groupName = _ref.groupName, groupName = _ref$groupName === void 0 ? "" : _ref$groupName, _ref$teams = _ref.teams, teams = _ref$teams === void 0 ? [] : _ref$teams;
          if (tournamentId) {
            _context.next = 3;
            break;
          }
          throw new Error("no-tournament-id");
        case 3:
          teamsToAdd = teams.map(function (team) {
            return {
              id: team._id,
              name: team.name
            };
          });
          _context.next = 6;
          return new _models.TournamentRound({
            tournament_id: tournamentId,
            group_name: groupName,
            teams: teamsToAdd
          }).save();
        case 6:
          newTournamentRound = _context.sent;
          return _context.abrupt("return", newTournamentRound._id);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createRoundRobinGroup(_x) {
    return _ref2.apply(this, arguments);
  };
}();