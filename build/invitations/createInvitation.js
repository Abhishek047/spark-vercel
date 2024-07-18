"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInvitation = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var createInvitation = exports.createInvitation = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var email, coachId, teamId, organizationId, rosterId, inTeamAlready, inRosterAlready, playerHasOrganization, confirmationCode, newInvitation;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          email = _ref.email, coachId = _ref.coachId, teamId = _ref.teamId, organizationId = _ref.organizationId, rosterId = _ref.rosterId, inTeamAlready = _ref.inTeamAlready, inRosterAlready = _ref.inRosterAlready, playerHasOrganization = _ref.playerHasOrganization, confirmationCode = _ref.confirmationCode;
          newInvitation = new _models.Invitation({
            confirmationCode: confirmationCode,
            email: email,
            invitedBy: coachId,
            inTeamAlready: inTeamAlready,
            teamId: teamId,
            inRosterAlready: inRosterAlready,
            rosterId: rosterId,
            playerHasOrganization: playerHasOrganization,
            organizationId: organizationId
          });
          _context.next = 4;
          return newInvitation.save();
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createInvitation(_x) {
    return _ref2.apply(this, arguments);
  };
}();