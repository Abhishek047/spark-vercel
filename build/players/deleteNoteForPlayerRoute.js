"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteNoteForPlayerRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _coaches = require("../coaches");
var _notes = require("../notes");
var _permissions = require("../permissions");
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var deleteNoteForPlayerRoute = exports.deleteNoteForPlayerRoute = {
  method: 'delete',
  path: '/players/:playerId/notes/:noteId',
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var coachId, _req$params, playerId, noteId, groupId, requesterAuthId, requesterUser, requesterId, isAllowed;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            coachId = req.user.user_id;
            _req$params = req.params, playerId = _req$params.playerId, noteId = _req$params.noteId;
            groupId = req.body.groupId; // 1. Who's sending this request? (We need to translate their authId to an actual userId)
            requesterAuthId = req.user.uid;
            _context.next = 6;
            return (0, _users.getUserByAuthId)(requesterAuthId);
          case 6:
            requesterUser = _context.sent;
            requesterId = requesterUser.id;
            _context.next = 10;
            return (0, _permissions.hasPermission)({
              userId: requesterId,
              groupId: groupId,
              permissionType: _permissions.ADMIN
            });
          case 10:
            isAllowed = _context.sent;
            if (isAllowed) {
              _context.next = 13;
              break;
            }
            return _context.abrupt("return", res.sendStatus(403));
          case 13:
            _context.prev = 13;
            _context.next = 16;
            return (0, _notes.deleteNote)(noteId);
          case 16:
            res.sendStatus(200);
            _context.next = 22;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](13);
            res.status(500).send({
              message: 'Error deleting note from user',
              error: _context.t0
            });
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[13, 19]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};