"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acceptInvitationByCode = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _users = require("../users");
var _models = require("../models");
var _groups = require("../groups");
// import * as admin from 'firebase-admin';
// import { getAllAncestorGroups } from '../groups';
// import { createMembership } from '../memberships';
// import { addPermission, PLAYER } from "../permissions";

var acceptInvitationByCode = exports.acceptInvitationByCode = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(confirmationCode) {
    var invitation, email, inTeamAlready, teamId, inRosterAlready, rosterId, playerHasOrganization, organizationId, user, playerId;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.Invitation.findOne({
            confirmationCode: confirmationCode
          });
        case 2:
          invitation = _context.sent;
          if (invitation) {
            _context.next = 5;
            break;
          }
          throw new Error("Not found");
        case 5:
          if (invitation.isConfirmed) {
            _context.next = 19;
            break;
          }
          email = invitation.email, inTeamAlready = invitation.inTeamAlready, teamId = invitation.teamId, inRosterAlready = invitation.inRosterAlready, rosterId = invitation.rosterId, playerHasOrganization = invitation.playerHasOrganization, organizationId = invitation.organizationId;
          _context.next = 9;
          return (0, _users.getUserByEmail)(email);
        case 9:
          user = _context.sent;
          playerId = user._id; // 4. Create a membership with data from the invitation
          // this will work for plaer who are already a user but invited to a diffrent org
          if (!playerHasOrganization) {
            (0, _users.addOrganizationToPlayer)(playerId, organizationId);
            console.log("organization_added_to_player");
          }
          // if Already in that roster
          if (!inRosterAlready) {
            _context.next = 15;
            break;
          }
          console.log("player-already-exist");
          return _context.abrupt("return", res.status(409).json({
            message: "player-already-exist",
            success: false
          }));
        case 15:
          // add that player to that roster and team
          // if not in team already
          if (!inTeamAlready) {
            (0, _groups.addPlayerIdToGroup)({
              groupId: teamId,
              playerId: playerId,
              email: email,
              gamerName: user.gamer_name,
              bio: user.bio,
              profile_img: user.profile_img,
              name: user.full_name
            });
          }
          (0, _groups.addPlayerIdToGroup)({
            groupId: rosterId,
            playerId: playerId,
            email: email,
            gamerName: user.gamer_name,
            bio: user.bio,
            profile_img: user.profile_img,
            name: user.full_name
          });
          // No schema for them-------------------------------------------------------------------

          // 5. Add a permission to the user - this will allow them to view group
          //    info and stuff like that

          // await addPermission({ userId, groupId, permissionType: PLAYER });

          // 6. Additionally, we need to find all the groups that THIS group belongs
          //    to and mark the player as a player on those groups as well.

          // const ancestorGroups = await getAllAncestorGroups(groupId);
          // await Promise.all(
          //     ancestorGroups.map((ancestorGroup) =>
          //         addPermission({ userId, groupId: ancestorGroup.id, permissionType: PLAYER })
          //     )
          // );

          // 6. And mark the invitation as accepted
          _context.next = 19;
          return invitation.updateOne({
            $set: {
              isConfirmed: true
            }
          });
        case 19:
          return _context.abrupt("return", invitation.email);
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function acceptInvitationByCode(_x) {
    return _ref.apply(this, arguments);
  };
}();