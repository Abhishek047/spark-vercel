"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNoteForPlayer = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var addNoteForPlayer = exports.addNoteForPlayer = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var coachId, playerId, text, newNoteObject, newNote;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          coachId = _ref.coachId, playerId = _ref.playerId, text = _ref.text;
          newNoteObject = {
            created_by: coachId,
            userId: playerId,
            text: text
          };
          newNote = new _models.Notes(newNoteObject);
          _context.next = 5;
          return newNote.save();
        case 5:
          console.log("note-created");
          return _context.abrupt("return", newNote);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addNoteForPlayer(_x) {
    return _ref2.apply(this, arguments);
  };
}();