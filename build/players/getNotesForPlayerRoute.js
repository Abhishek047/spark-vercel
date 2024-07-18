"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNotesForPlayerRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _notes = require("../notes");
var _permissions = require("../permissions");
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var getNotesForPlayerRoute = exports.getNotesForPlayerRoute = {
  method: "get",
  path: "/players/:playerId/teams/:teamId/notes",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var requesterAuthId, requesterUser, requesterId, groupId, playerId, isAllowed, coachId, notes;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            requesterAuthId = req.user.uid;
            _context.next = 3;
            return (0, _users.getUserByAuthId)(requesterAuthId);
          case 3:
            requesterUser = _context.sent;
            requesterId = requesterUser.id;
            groupId = req.params.teamId;
            playerId = req.params.playerId;
            _context.prev = 7;
            if (!(playerId !== requesterId)) {
              _context.next = 16;
              break;
            }
            console.log("not-player");
            console.log("check-permission");
            _context.next = 13;
            return (0, _permissions.hasPermission)({
              userId: requesterId,
              groupId: groupId,
              permissionType: _permissions.ADMIN
            });
          case 13:
            isAllowed = _context.sent;
            if (isAllowed) {
              _context.next = 16;
              break;
            }
            return _context.abrupt("return", res.send(403).json({
              nodes: []
            }));
          case 16:
            coachId = requesterId;
            if (!(playerId === requesterId)) {
              _context.next = 24;
              break;
            }
            console.log("show-player-all-his-notes");
            _context.next = 21;
            return (0, _notes.getAllNotesForPlayer)({
              playerId: playerId
            });
          case 21:
            notes = _context.sent.slice().sort(function (a, b) {
              return b.createdAt - a.createdAt;
            });
            _context.next = 27;
            break;
          case 24:
            _context.next = 26;
            return (0, _notes.getNotesForPlayer)({
              coachId: coachId,
              playerId: playerId
            });
          case 26:
            notes = _context.sent.sort(function (a, b) {
              return b.createdAt - a.createdAt;
            });
          case 27:
            return _context.abrupt("return", res.status(200).json(notes));
          case 30:
            _context.prev = 30;
            _context.t0 = _context["catch"](7);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: "server-error"
            }));
          case 33:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[7, 30]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};