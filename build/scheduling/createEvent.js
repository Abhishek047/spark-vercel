"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEvent = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var createEvent = exports.createEvent = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var name, time, date, description, background_color, invitees, event_type, created_by, dateObject, newEvent;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          name = _ref.name, time = _ref.time, date = _ref.date, description = _ref.description, background_color = _ref.background_color, invitees = _ref.invitees, event_type = _ref.event_type, created_by = _ref.created_by;
          dateObject = new Date(date);
          newEvent = new _models.Events({
            name: name,
            time: time,
            description: description,
            background_color: background_color,
            date: dateObject,
            year: dateObject.getFullYear(),
            month: dateObject.getMonth(),
            invitees: invitees,
            event_type: event_type,
            created_by: created_by
          });
          _context.next = 5;
          return newEvent.save();
        case 5:
          return _context.abrupt("return", newEvent._id);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createEvent(_x) {
    return _ref2.apply(this, arguments);
  };
}();