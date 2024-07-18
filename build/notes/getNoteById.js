"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNoteById = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var getNoteById = exports.getNoteById = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(noteId) {
    var note;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (noteId) {
            _context.next = 2;
            break;
          }
          throw new Error("no-note-id-found");
        case 2:
          _context.next = 4;
          return _models.Notes.findById(nodeId);
        case 4:
          note = _context.sent;
          return _context.abrupt("return", note);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getNoteById(_x) {
    return _ref.apply(this, arguments);
  };
}();