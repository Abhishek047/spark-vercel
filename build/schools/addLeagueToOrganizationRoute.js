"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addLeagueToOrganizationRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _users = require("../users");
var _addLeague = require("./addLeague");
var addLeagueToOrganizationRoute = exports.addLeagueToOrganizationRoute = {
  path: "/:groupId/league",
  method: "post",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, groupId, _req$body, team, leagueName, game, user, legueId;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authUser = req.user;
            groupId = req.params.groupId;
            _req$body = req.body, team = _req$body.team, leagueName = _req$body.leagueName, game = _req$body.game;
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
            return (0, _addLeague.addLeague)({
              team: team,
              game: game,
              league: leagueName,
              userId: user._id,
              groupId: groupId
            });
          case 11:
            legueId = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              success: true,
              legueId: legueId
            }));
          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: _context.t0.message
            }));
          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 15]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};