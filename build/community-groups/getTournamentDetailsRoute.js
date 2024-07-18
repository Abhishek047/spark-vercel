"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTournamentDetailsRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _users = require("../users");
var _getTournamentById = require("./getTournamentById");
var getTournamentDetailsRoute = exports.getTournamentDetailsRoute = {
  method: "get",
  path: "/:tournamentId/details/tournament",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, user, tournamentId, tournament;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authUser = req.user;
            _context.next = 3;
            return (0, _users.getUserByAuthId)(authUser.user_id);
          case 3:
            user = _context.sent;
            _context.prev = 4;
            tournamentId = req.params.tournamentId;
            _context.next = 8;
            return (0, _getTournamentById.getTournamentById)({
              tournamentId: tournamentId,
              userId: user._id
            });
          case 8:
            tournament = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              success: true,
              tournament: tournament
            }));
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](4);
            console.log(_context.t0.message);
            if (!(_context.t0.message === "no-groupId")) {
              _context.next = 17;
              break;
            }
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "You are not part of that group"
            }));
          case 17:
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: "Server error"
            }));
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 12]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};