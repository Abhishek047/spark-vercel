"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllWarRoomEventsForUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _excluded = ["war_room_match_id"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var getAllWarRoomEventsForUser = exports.getAllWarRoomEventsForUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userId) {
    var allEvents, matches;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.Events.find({
            event_type: _models.WAR_ROOM,
            'invitees.id': userId
          }).lean().populate('war_room_match_id');
        case 2:
          allEvents = _context.sent;
          // renaming the war_room_sessions_id
          matches = allEvents.map(function (_ref2) {
            var war_room_match_id = _ref2.war_room_match_id,
              rest = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
            return _objectSpread(_objectSpread({}, rest), {}, {
              match: war_room_match_id
            });
          });
          return _context.abrupt("return", matches);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllWarRoomEventsForUser(_x) {
    return _ref.apply(this, arguments);
  };
}();