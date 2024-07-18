"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWarRoomMatch = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _addWarRoomIdToEvent = require("../scheduling/addWarRoomIdToEvent");
var createWarRoomMatch = exports.createWarRoomMatch = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var matchName, team, game, opponentName, maps, eventId, newWarRoom, warRoomId;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          matchName = _ref.matchName, team = _ref.team, game = _ref.game, opponentName = _ref.opponentName, maps = _ref.maps, eventId = _ref.eventId;
          if (eventId) {
            _context.next = 3;
            break;
          }
          throw new Error('no-event-id-found');
        case 3:
          newWarRoom = new _models.WarRoom({
            match_name: matchName,
            eventId: eventId,
            team: team,
            opponent_team: opponentName,
            game: game,
            maps: maps
          });
          _context.next = 6;
          return newWarRoom.save();
        case 6:
          warRoomId = newWarRoom._id;
          _context.next = 9;
          return (0, _addWarRoomIdToEvent.addWarRoomIdToEvent)({
            eventId: eventId,
            warRoomId: warRoomId
          });
        case 9:
          return _context.abrupt("return", warRoomId);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createWarRoomMatch(_x) {
    return _ref2.apply(this, arguments);
  };
}();