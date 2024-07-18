"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTournamentRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _createTournament = require("./createTournament");
var createTournamentRoute = exports.createTournamentRoute = {
  method: "post",
  path: "/tournament",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, _req$body, tournamentName, gameName, img, groupId, user, tournamentId;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authUser = req.user;
            _context.prev = 1;
            _req$body = req.body, tournamentName = _req$body.tournamentName, gameName = _req$body.gameName, img = _req$body.img, groupId = _req$body.groupId;
            _context.next = 5;
            return (0, _users.getUserByAuthId)(authUser.user_id);
          case 5:
            user = _context.sent;
            _context.next = 8;
            return (0, _createTournament.createTournament)({
              tournamentName: tournamentName,
              gameName: gameName,
              img: img,
              groupId: groupId,
              userId: user._id
            });
          case 8:
            tournamentId = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              success: true,
              tournamentId: tournamentId
            }));
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0.message);
            if (!(_context.t0.message === "no-org-found")) {
              _context.next = 17;
              break;
            }
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "You are not part of that group"
            }));
          case 17:
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "Server error"
            }));
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 12]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};