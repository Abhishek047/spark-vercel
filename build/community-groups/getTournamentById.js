"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTournamentById = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var getTournamentById = exports.getTournamentById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var tournamentId, userId, user, tournament, published, createdBy;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          tournamentId = _ref.tournamentId, userId = _ref.userId, user = _ref.user;
          _context.next = 3;
          return _models.Tournament.findById(tournamentId);
        case 3:
          tournament = _context.sent;
          if (tournament) {
            _context.next = 6;
            break;
          }
          throw new Error("no-tournament-found");
        case 6:
          published = tournament.publishable;
          createdBy = tournament.created_by_user;
          if (!published) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", tournament);
        case 12:
          if (!("".concat(userId) == "".concat(createdBy))) {
            _context.next = 14;
            break;
          }
          return _context.abrupt("return", tournament);
        case 14:
          return _context.abrupt("return", null);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getTournamentById(_x) {
    return _ref2.apply(this, arguments);
  };
}();