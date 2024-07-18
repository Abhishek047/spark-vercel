"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWarRoomMatchRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _validEventTypes = require("../models/validEventTypes");
var _scheduling = require("../scheduling");
var _createWarRoomMatch = require("./createWarRoomMatch");
var createWarRoomMatchRoute = exports.createWarRoomMatchRoute = {
  path: '/war-room',
  method: 'post',
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, _req$body, team, game, opponentTeam, eventName, eventDate, maps, invitees, user, createdById, eventId, matchId;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authUser = req.user;
            _req$body = req.body, team = _req$body.team, game = _req$body.game, opponentTeam = _req$body.opponentTeam, eventName = _req$body.eventName, eventDate = _req$body.eventDate, maps = _req$body.maps, invitees = _req$body.invitees;
            _context.prev = 2;
            if (!(!team || !game || !eventDate || !eventName)) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return", res.status(400).json({
              success: false,
              message: 'Please fill the required field'
            }));
          case 5:
            _context.next = 7;
            return (0, _users.getUserByAuthId)(authUser.user_id);
          case 7:
            user = _context.sent;
            createdById = user._id;
            _context.next = 11;
            return (0, _scheduling.createEvent)({
              name: eventName,
              date: eventDate,
              event_type: _validEventTypes.WAR_ROOM,
              created_by: createdById,
              invitees: [].concat((0, _toConsumableArray2["default"])(invitees), [{
                id: user._id,
                name: user.full_name,
                email: user.email,
                gamerName: user.gamer_name,
                profile_img: user.profile_img,
                bio: user.bio
              }])
            });
          case 11:
            eventId = _context.sent;
            _context.next = 14;
            return (0, _createWarRoomMatch.createWarRoomMatch)({
              matchName: eventName,
              team: team,
              game: game,
              opponentName: opponentTeam,
              maps: maps,
              eventId: eventId
            });
          case 14:
            matchId = _context.sent;
            // everything we  normally
            console.log('war-room-match-created');
            return _context.abrupt("return", res.status(200).json({
              success: true,
              matchId: matchId
            }));
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: _context.t0.message
            }));
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 19]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};