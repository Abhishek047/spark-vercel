"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNoteToPlayerRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _coaches = require("../coaches");
var _notes = require("../notes");
var _permissions = require("../permissions");
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var addNoteToPlayerRoute = exports.addNoteToPlayerRoute = {
  method: "post",
  path: "/players/:playerId/notes",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$body, text, groupId, playerId, requesterAuthId, requesterUser, requesterId, isAllowed, newNote;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, text = _req$body.text, groupId = _req$body.groupId;
            playerId = req.params.playerId; // 1. Who's sending this request? (We need to translate their authId to an actual userId)
            requesterAuthId = req.user.uid;
            _context.next = 5;
            return (0, _users.getUserByAuthId)(requesterAuthId);
          case 5:
            requesterUser = _context.sent;
            requesterId = requesterUser.id;
            _context.next = 9;
            return (0, _permissions.hasPermission)({
              userId: requesterId,
              groupId: groupId,
              permissionType: _permissions.ADMIN
            });
          case 9:
            isAllowed = _context.sent;
            if (isAllowed) {
              _context.next = 12;
              break;
            }
            return _context.abrupt("return", res.sendStatus(403));
          case 12:
            _context.prev = 12;
            _context.next = 15;
            return (0, _notes.addNoteForPlayer)({
              requesterId: requesterId,
              playerId: playerId,
              text: text
            });
          case 15:
            newNote = _context.sent;
            res.status(200).json(newNote);
            _context.next = 23;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](12);
            console.log(_context.t0);
            res.status(500).send({
              message: "Error adding note to user"
            });
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[12, 19]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};