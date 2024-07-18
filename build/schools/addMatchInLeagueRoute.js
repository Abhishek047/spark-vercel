"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMatchInLeagueRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _users = require("../users");
var _addMatchToLeague = require("./addMatchToLeague");
var addMatchInLeagueRoute = exports.addMatchInLeagueRoute = {
  path: "/:leagueId/league/match",
  method: "post",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, leagueId, _req$body, opponent, note, date, win, lose, user;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authUser = req.user;
            leagueId = req.params.leagueId;
            _req$body = req.body, opponent = _req$body.opponent, note = _req$body.note, date = _req$body.date, win = _req$body.win, lose = _req$body.lose;
            _context.prev = 3;
            _context.next = 6;
            return (0, _users.getUserByAuthId)(authUser.user_id);
          case 6:
            user = _context.sent;
            if (user) {
              _context.next = 9;
              break;
            }
            return _context.abrupt("return", res.status(404).json({
              message: "no-user-found"
            }));
          case 9:
            _context.next = 11;
            return (0, _addMatchToLeague.addMatchToLeague)({
              leagueId: leagueId,
              opponent: opponent,
              note: note,
              date: date,
              win: win,
              lose: lose
            });
          case 11:
            return _context.abrupt("return", res.status(200).json({
              success: true
            }));
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: _context.t0.message
            }));
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 14]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};