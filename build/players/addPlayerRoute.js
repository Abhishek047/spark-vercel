"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPlayerRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _uuid = require("uuid");
var _groups = require("../groups");
var _invitations = require("../invitations");
var _models = require("../models");
var _permissions = require("../permissions");
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var addPlayerRoute = exports.addPlayerRoute = {
  path: "/rosters/:rosterId/players",
  method: "post",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var rosterId, requesterAuthId, requesterUser, requesterId, email, baseUrl, roster, parentsForCurrentRoster, _yield$getAllParents, organization, team, user, confirmationCode, playerId, ifAlreadyAnInvitation, inTeamAlready, inRosterAlready, ifPlayerIsInTheOrganization;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            rosterId = req.params.rosterId; //   coach auth_id
            requesterAuthId = req.user.uid; //   coach
            _context.next = 4;
            return (0, _users.getUserByAuthId)(requesterAuthId);
          case 4:
            requesterUser = _context.sent;
            //   coachID
            requesterId = requesterUser._id; // currently nmo permissions are set right now
            //  const isAllowed = await hasPermission({
            //      userId: requesterId,
            //      groupId,
            //      permissionType: ADMIN,
            //  });
            //  if (!isAllowed) return res.sendStatus(403);
            _context.prev = 6;
            email = req.body.email;
            baseUrl = req.app.get("baseFrontEndUrl");
            _context.next = 11;
            return (0, _groups.getGroupById)(rosterId);
          case 11:
            roster = _context.sent;
            // the onject returned by a mongoose schema has .id(string type) and ._id(ObjectId type)
            parentsForCurrentRoster = roster.parent_groups.filter(function (parent) {
              return parent !== roster.id;
            });
            _context.next = 15;
            return (0, _groups.getAllParents)(parentsForCurrentRoster);
          case 15:
            _yield$getAllParents = _context.sent;
            organization = _yield$getAllParents.organization;
            team = _yield$getAllParents.team;
            _context.next = 20;
            return (0, _users.getUserByEmail)(email);
          case 20:
            user = _context.sent;
            // player object to save in the Groups DB
            confirmationCode = (0, _uuid.v4)(); // get the playerId,if player is not there create a player and with invitedTo and invitedBy vfields
            if (!user) {
              _context.next = 26;
              break;
            }
            _context.t0 = user._id;
            _context.next = 29;
            break;
          case 26:
            _context.next = 28;
            return (0, _users.createUserInDB)({
              email: email
            });
          case 28:
            _context.t0 = _context.sent;
          case 29:
            playerId = _context.t0;
            _context.next = 32;
            return _models.Invitation.findOne({
              email: email,
              rosterId: roster._id
            });
          case 32:
            ifAlreadyAnInvitation = _context.sent;
            if (!ifAlreadyAnInvitation) {
              _context.next = 38;
              break;
            }
            console.log("already a invitation");
            _context.next = 37;
            return (0, _invitations.sendInvitationEmail)({
              email: email,
              groupName: team.name,
              schoolName: organization.name,
              confirmationCode: ifAlreadyAnInvitation.confirmationCode,
              baseUrl: baseUrl
            });
          case 37:
            return _context.abrupt("return", res.sendStatus(200));
          case 38:
            // here we perform all the check on the user
            // like if he is in that team or in that roster or if the player has that organization
            // player.id means player._id thats why not used the id here right now
            // will find something later
            inTeamAlready = team.players.filter(function (player) {
              return player.email === email;
            }).length > 0 ? true : false;
            inRosterAlready = roster.players.filter(function (player) {
              return player.email === email;
            }).length > 0 ? true : false;
            ifPlayerIsInTheOrganization = user && user.organizations.includes(organization.id) ? true : false; // if Already in that roster
            if (!inRosterAlready) {
              _context.next = 44;
              break;
            }
            console.log("player-already-exist");
            return _context.abrupt("return", res.status(409).json({
              message: "player-already-exist",
              success: false
            }));
          case 44:
            _context.next = 46;
            return (0, _invitations.sendInvitationEmail)({
              email: email,
              groupName: team.name,
              schoolName: organization.name,
              confirmationCode: confirmationCode,
              baseUrl: baseUrl
            });
          case 46:
            _context.next = 48;
            return (0, _invitations.createInvitation)({
              email: email,
              coachId: requesterId,
              inRosterAlready: inRosterAlready,
              inTeamAlready: inTeamAlready,
              teamId: team._id,
              rosterId: roster._id,
              organizationId: organization.id,
              playerHasOrganization: ifPlayerIsInTheOrganization,
              confirmationCode: confirmationCode
            });
          case 48:
            res.sendStatus(200);
            _context.next = 55;
            break;
          case 51:
            _context.prev = 51;
            _context.t1 = _context["catch"](6);
            console.log(_context.t1);
            return _context.abrupt("return", res.status(500).send({
              success: false,
              error: _context.t1
            }));
          case 55:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[6, 51]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};