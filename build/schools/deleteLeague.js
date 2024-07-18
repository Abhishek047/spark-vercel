"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteLeague = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _permissions = require("../permissions");
var deleteLeague = exports.deleteLeague = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(leagueId, userId) {
    var league, groupId, canDeleteLeague;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.League.findById(leagueId);
        case 2:
          league = _context.sent;
          groupId = league.groupId;
          _context.next = 6;
          return (0, _permissions.hasPermission)({
            userId: userId,
            groupId: groupId,
            permissionType: _permissions.ADMIN
          });
        case 6:
          canDeleteLeague = _context.sent;
          if (!(league.created_by != userId)) {
            _context.next = 10;
            break;
          }
          if (canDeleteLeague) {
            _context.next = 10;
            break;
          }
          throw new Error("not-authorized");
        case 10:
          _context.next = 12;
          return league.deleteOne();
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function deleteLeague(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();