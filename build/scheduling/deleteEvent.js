"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteEvent = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _validEventTypes = require("../models/validEventTypes");
var deleteEvent = exports.deleteEvent = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var eventId, userId, event;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          eventId = _ref.eventId, userId = _ref.userId;
          _context.next = 3;
          return _models.Events.findById(eventId);
        case 3:
          event = _context.sent;
          if (event) {
            _context.next = 6;
            break;
          }
          throw new Error("event-not-found");
        case 6:
          if (!(event.created_by != userId)) {
            _context.next = 8;
            break;
          }
          throw new Error("not-authorized");
        case 8:
          if (!(event.event_type === _validEventTypes.WAR_ROOM)) {
            _context.next = 15;
            break;
          }
          if (!event.war_room_session_id) {
            _context.next = 14;
            break;
          }
          _context.next = 12;
          return _models.WarRoom.findByIdAndDelete(event.war_room_session_id);
        case 12:
          _context.next = 15;
          break;
        case 14:
          console.log("no-war_room_session_id");
        case 15:
          _context.next = 17;
          return event.deleteOne();
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function deleteEvent(_x) {
    return _ref2.apply(this, arguments);
  };
}();