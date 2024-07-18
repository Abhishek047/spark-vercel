"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRostersForTeam = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var getRostersForTeam = exports.getRostersForTeam = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(teamId) {
    var roster;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (teamId) {
            _context.next = 2;
            break;
          }
          throw new Error("no-team-id");
        case 2:
          _context.next = 4;
          return _models.Groups.find({
            parent_groups: teamId,
            group_type: _models.ROSTER
          }).select("-parent_groups");
        case 4:
          roster = _context.sent;
          return _context.abrupt("return", roster);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getRostersForTeam(_x) {
    return _ref.apply(this, arguments);
  };
}();