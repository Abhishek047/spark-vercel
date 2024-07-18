"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTournamentRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _updateTournament = require("./updateTournament");
var _getUserByAuthId = require("../users/getUserByAuthId");
var _routeProtectors = require("../route-protectors");
var updateTournamentRoute = exports.updateTournamentRoute = {
  method: "put",
  path: "/:tournamentId/tournament/update/",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var tournamentId, authUser, user, tournament;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            tournamentId = req.params.tournamentId;
            authUser = req.user;
            _context.prev = 2;
            _context.next = 5;
            return (0, _getUserByAuthId.getUserByAuthId)(authUser.user_id);
          case 5:
            user = _context.sent;
            _context.next = 8;
            return (0, _updateTournament.updateTournament)({
              tournamentId: tournamentId,
              params: req.body,
              userId: user._id
            });
          case 8:
            tournament = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              success: true,
              updated: tournament
            }));
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0.message);
            if (!(_context.t0.message === "no-tournamentId")) {
              _context.next = 17;
              break;
            }
            return _context.abrupt("return", res.status(404).json({
              success: false,
              message: "No Tournament ID not found"
            }));
          case 17:
            if (!(_context.t0.message === "no-tournament-for-user-top-update")) {
              _context.next = 19;
              break;
            }
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "No tournament exist for User"
            }));
          case 19:
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: "Server error"
            }));
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 12]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};