"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onboardCoachRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _uuid = require("uuid");
var _groups = require("../groups");
var _invitations = require("../invitations");
var _permissions = require("../permissions");
var _routeProtectors = require("../route-protectors");
var _rosters = require("../rosters");
var _schools = require("../schools");
var _teams = require("../teams");
var _users = require("../users");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
    A request is sent to this route AFTER the coach completes the onboarding flow,
    i.e. all the information collected during onboarding is sent to this route at the same time.
*/
var onboardCoachRoute = exports.onboardCoachRoute = {
  method: "post",
  path: "/users/:userId/onboarding/coach",
  // Coaches must be both logged in and have verified their email
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authId, _req$body, _req$body$userInfo, userInfo, _req$body$schoolInfo, schoolInfo, _req$body$teams, teams, fullName, bio, _schoolInfo$name, schoolName, _schoolInfo$orgType, OrganizationType, baseUrl, authUser, userInDB, userId, user, updatedUser, school, schoolId, memberIds, _iterator, _step, team, teamName, game, rosters, url, teamId, _iterator2, _step2, roster, _roster$name, rosterName, _roster$playerEmails, playerEmails, rosterId, _iterator3, _step3, email, _user, playerId, confirmationCode, membershipId;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // 1. Get all our data in order
            authId = req.params.userId; // authId is the automatically assigned id from Firebase Auth
            _req$body = req.body, _req$body$userInfo = _req$body.userInfo, userInfo = _req$body$userInfo === void 0 ? {} : _req$body$userInfo, _req$body$schoolInfo = _req$body.schoolInfo, schoolInfo = _req$body$schoolInfo === void 0 ? {} : _req$body$schoolInfo, _req$body$teams = _req$body.teams, teams = _req$body$teams === void 0 ? [] : _req$body$teams;
            fullName = userInfo.fullName, bio = userInfo.bio;
            _schoolInfo$name = schoolInfo.name, schoolName = _schoolInfo$name === void 0 ? "" : _schoolInfo$name, _schoolInfo$orgType = schoolInfo.orgType, OrganizationType = _schoolInfo$orgType === void 0 ? "" : _schoolInfo$orgType;
            baseUrl = req.app.get("baseFrontEndUrl"); // This changes depending on whether we're in prod/dev/local
            authUser = req.user; // This is the firebase user info, added by the 'addUserToRoute' middleware in server.js
            // 2. Make sure whoever sent this request is actually that user
            if (!(authId !== authUser.user_id)) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return", res.status(403).json({
              message: "Users can only update their own data"
            }));
          case 8:
            _context.next = 10;
            return (0, _users.getUserByAuthId)(authId);
          case 10:
            userInDB = _context.sent;
            userId = userInDB.id; // This is the actual user id, different from the authId we saw earlier (a little confusing, perhaps)
            user = _objectSpread(_objectSpread({}, authUser), updatedUser); // 4. Update the user's info in the DB with the onboarding data
            _context.next = 15;
            return (0, _users.updateUser)(userId, {
              fullName: fullName,
              bio: bio
            });
          case 15:
            updatedUser = _context.sent;
            _context.next = 18;
            return (0, _permissions.addPermission)({
              userId: userId,
              groupId: schoolId,
              permissionType: _permissions.ADMIN
            });
          case 18:
            // 6. Create the school
            school = {
              name: schoolName,
              coachId: userId,
              groupType: "school"
            };
            _context.next = 21;
            return (0, _schools.createSchool)(school);
          case 21:
            schoolId = _context.sent;
            // We're going to use this to keep track of all the member ids we're adding to the school
            memberIds = []; // 7. Loop through all the teams and rosters provided in the onboarding flow,
            //    create them in the database, and give the coach (this user) ADMIN permissions.
            //    We also need to invite (and create, if they don't yet exist) the users from the emails
            //    provided for each roster.
            _iterator = _createForOfIteratorHelper(teams);
            _context.prev = 24;
            _iterator.s();
          case 26:
            if ((_step = _iterator.n()).done) {
              _context.next = 90;
              break;
            }
            team = _step.value;
            // 7a. Get the team info provided in the onboarding flow
            teamName = team.name, game = team.game, rosters = team.rosters, url = team.url; // 7b. Create a new team that belongs to the school
            //     (behind the scenes, this creates a new "group" and a "membership"
            //     that assigns that group as a member of the school)
            _context.next = 31;
            return (0, _teams.createTeam)({
              name: teamName,
              game: game,
              schoolId: schoolId,
              coachId: userId,
              url: url
            });
          case 31:
            teamId = _context.sent;
            _context.next = 34;
            return (0, _permissions.addPermission)({
              userId: userId,
              groupId: teamId,
              permissionType: _permissions.ADMIN
            });
          case 34:
            // 7d. Here's where we loop through all the rosters
            _iterator2 = _createForOfIteratorHelper(rosters);
            _context.prev = 35;
            _iterator2.s();
          case 37:
            if ((_step2 = _iterator2.n()).done) {
              _context.next = 80;
              break;
            }
            roster = _step2.value;
            // 7e. Get the roster info
            _roster$name = roster.name, rosterName = _roster$name === void 0 ? "" : _roster$name, _roster$playerEmails = roster.playerEmails, playerEmails = _roster$playerEmails === void 0 ? [] : _roster$playerEmails; // 7f. Create the a new roster in the DB from that info
            _context.next = 42;
            return (0, _rosters.createRoster)({
              name: rosterName,
              teamId: teamId,
              schoolId: schoolId,
              coachId: userId
            });
          case 42:
            rosterId = _context.sent;
            _context.next = 45;
            return (0, _permissions.addPermission)({
              userId: userId,
              groupId: rosterId,
              permissionType: _permissions.ADMIN
            });
          case 45:
            // 7g. And here's where we loop through all the player emails that
            //     the coach entered and invite them.
            _iterator3 = _createForOfIteratorHelper(playerEmails);
            _context.prev = 46;
            _iterator3.s();
          case 48:
            if ((_step3 = _iterator3.n()).done) {
              _context.next = 70;
              break;
            }
            email = _step3.value;
            _context.next = 52;
            return (0, _users.getUserByEmail)(email);
          case 52:
            _user = _context.sent;
            if (!_user) {
              _context.next = 57;
              break;
            }
            _context.t0 = _user.id;
            _context.next = 60;
            break;
          case 57:
            _context.next = 59;
            return (0, _users.createUserInDB)({
              email: email,
              membershipTypeId: "player"
            });
          case 59:
            _context.t0 = _context.sent;
          case 60:
            playerId = _context.t0;
            memberIds.push(playerId);

            // 7j. Generate a confirmation code that we can send to the user's email.
            //     This will be used in the 'acceptInvitationRoute'
            confirmationCode = (0, _uuid.v4)(); // 7k. Send this confirmation code in an invitation to the user's email
            _context.next = 65;
            return (0, _invitations.sendInvitationEmail)({
              email: email,
              groupName: teamName,
              schoolName: schoolName,
              confirmationCode: confirmationCode,
              baseUrl: baseUrl
            });
          case 65:
            _context.next = 67;
            return (0, _invitations.createInvitation)({
              email: email,
              groupId: rosterId,
              userId: playerId,
              membershipTypeId: "player",
              invitedById: userId,
              confirmationCode: confirmationCode
            });
          case 67:
            membershipId = _context.sent;
          case 68:
            _context.next = 48;
            break;
          case 70:
            _context.next = 75;
            break;
          case 72:
            _context.prev = 72;
            _context.t1 = _context["catch"](46);
            _iterator3.e(_context.t1);
          case 75:
            _context.prev = 75;
            _iterator3.f();
            return _context.finish(75);
          case 78:
            _context.next = 37;
            break;
          case 80:
            _context.next = 85;
            break;
          case 82:
            _context.prev = 82;
            _context.t2 = _context["catch"](35);
            _iterator2.e(_context.t2);
          case 85:
            _context.prev = 85;
            _iterator2.f();
            return _context.finish(85);
          case 88:
            _context.next = 26;
            break;
          case 90:
            _context.next = 95;
            break;
          case 92:
            _context.prev = 92;
            _context.t3 = _context["catch"](24);
            _iterator.e(_context.t3);
          case 95:
            _context.prev = 95;
            _iterator.f();
            return _context.finish(95);
          case 98:
            _context.next = 100;
            return (0, _schools.addMembersToSchool)(schoolId, userId, memberIds);
          case 100:
            _context.next = 102;
            return (0, _users.setUserToOnboarded)(userId);
          case 102:
            res.status(200).json({});
          case 103:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[24, 92, 95, 98], [35, 82, 85, 88], [46, 72, 75, 78]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};