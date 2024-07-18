"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlayersForTeamRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _getPlayersForTeam = require("./getPlayersForTeam");
var getPlayersForTeamRoute = exports.getPlayersForTeamRoute = {
  path: '/teams/:teamId/players',
  method: 'get',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var teamId, players;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            teamId = req.params.teamId;
            _context.prev = 1;
            _context.next = 4;
            return (0, _getPlayersForTeam.getPlayersForTeam)(teamId);
          case 4:
            players = _context.sent;
            res.status(200).json(players);
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.sendStatus(500);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};