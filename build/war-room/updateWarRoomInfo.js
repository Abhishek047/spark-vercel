"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateWarRoomInfo = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var updateWarRoomInfo = exports.updateWarRoomInfo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var matchId, updateValues, updated;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          matchId = _ref.matchId, updateValues = _ref.updateValues;
          _context.next = 3;
          return _models.WarRoom.findByIdAndUpdate(matchId, {
            $set: updateValues
          }, {
            "new": true
          });
        case 3:
          updated = _context.sent;
          if (updated) {
            _context.next = 6;
            break;
          }
          throw new Error('no-session-found');
        case 6:
          return _context.abrupt("return", true);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function updateWarRoomInfo(_x) {
    return _ref2.apply(this, arguments);
  };
}();