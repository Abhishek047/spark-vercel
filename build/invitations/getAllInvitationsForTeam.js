"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllInvitationsForTeam = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var getAllInvitationsForTeam = exports.getAllInvitationsForTeam = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(teamId) {
    var inviations;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.Invitation.find({
            teamId: teamId,
            isConfirmed: false
          }).select("email");
        case 2:
          inviations = _context.sent;
          return _context.abrupt("return", inviations);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllInvitationsForTeam(_x) {
    return _ref.apply(this, arguments);
  };
}();