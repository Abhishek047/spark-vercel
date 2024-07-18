"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNotesForPlayer = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var getNotesForPlayer = exports.getNotesForPlayer = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var viewerId, playerId, notes;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          viewerId = _ref.viewerId, playerId = _ref.playerId;
          notes = _models.Notes.find({
            userId: playerId,
            created_by: viewerId
          });
          return _context.abrupt("return", notes);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getNotesForPlayer(_x) {
    return _ref2.apply(this, arguments);
  };
}();