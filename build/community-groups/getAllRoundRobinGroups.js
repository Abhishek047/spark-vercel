"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllRoundRobinGroups = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var getAllRoundRobinGroups = exports.getAllRoundRobinGroups = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var _ref$tournamentId, tournamentId, rounds;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _ref$tournamentId = _ref.tournamentId, tournamentId = _ref$tournamentId === void 0 ? "" : _ref$tournamentId;
          if (tournamentId) {
            _context.next = 3;
            break;
          }
          throw new Error("no-tournament-id");
        case 3:
          _context.next = 5;
          return _models.TournamentRound.find({
            tournament_id: tournamentId
          });
        case 5:
          rounds = _context.sent;
          return _context.abrupt("return", rounds);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllRoundRobinGroups(_x) {
    return _ref2.apply(this, arguments);
  };
}();