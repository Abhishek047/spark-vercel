"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMatchToLeague = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var addMatchToLeague = exports.addMatchToLeague = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var leagueId, opponent, note, date, win, lose, matchToAdd;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          leagueId = _ref.leagueId, opponent = _ref.opponent, note = _ref.note, date = _ref.date, win = _ref.win, lose = _ref.lose;
          if (!(!leagueId || !note || !date)) {
            _context.next = 3;
            break;
          }
          throw new Error("filed-not-found");
        case 3:
          matchToAdd = {
            opponent: opponent,
            match_date: new Date(date),
            win: win,
            lose: lose,
            note: note
          };
          _context.next = 6;
          return _models.League.findByIdAndUpdate(leagueId, {
            $push: {
              matches: matchToAdd
            }
          });
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addMatchToLeague(_x) {
    return _ref2.apply(this, arguments);
  };
}();