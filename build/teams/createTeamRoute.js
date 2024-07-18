"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTeamRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _rosters = require("../rosters");
var _routeProtectors = require("../route-protectors");
var _createDefaultRoster = require("../rosters/createDefaultRoster");
var _schools = require("../schools");
var _teams = require("../teams");
var _users = require("../users");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var createTeamRoute = exports.createTeamRoute = {
  path: "/teams",
  method: "post",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$body, game, nameRaw, organizationId, rosters, url, name, coachAuthId, coachUser, coachId, isCoach, teamId, _iterator, _step, roster, _roster$name, rosterName;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, game = _req$body.game, nameRaw = _req$body.name, organizationId = _req$body.organizationId, rosters = _req$body.rosters, url = _req$body.url; // We're making the "name" field optional - if they don't enter it, the team name should be the game name
            name = nameRaw || game;
            coachAuthId = req.user.user_id;
            _context.prev = 3;
            _context.next = 6;
            return (0, _users.getUserByAuthId)(coachAuthId);
          case 6:
            coachUser = _context.sent;
            coachId = coachUser._id;
            _context.next = 10;
            return (0, _schools.isCoachForSchool)(coachId, organizationId);
          case 10:
            isCoach = _context.sent;
            if (isCoach) {
              _context.next = 13;
              break;
            }
            return _context.abrupt("return", res.status(403).json({
              message: "Only coaches can add teams to schools"
            }));
          case 13:
            _context.prev = 13;
            _context.next = 16;
            return (0, _teams.createTeam)({
              name: name,
              game: game,
              organizationId: organizationId,
              coach: coachUser,
              url: url
            });
          case 16:
            teamId = _context.sent;
            _context.next = 23;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](13);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(500).json({
              error: _context.t0.message,
              secretMessage: "Error in team creation"
            }));
          case 23:
            if (!teamId) {
              _context.next = 46;
              break;
            }
            _iterator = _createForOfIteratorHelper(rosters);
            _context.prev = 25;
            _iterator.s();
          case 27:
            if ((_step = _iterator.n()).done) {
              _context.next = 34;
              break;
            }
            roster = _step.value;
            _roster$name = roster.name, rosterName = _roster$name === void 0 ? "" : _roster$name; // create a roster for team and then a default roster
            _context.next = 32;
            return (0, _rosters.createRoster)({
              name: rosterName,
              teamId: teamId,
              organizationId: organizationId,
              coach: coachUser
            });
          case 32:
            _context.next = 27;
            break;
          case 34:
            _context.next = 39;
            break;
          case 36:
            _context.prev = 36;
            _context.t1 = _context["catch"](25);
            _iterator.e(_context.t1);
          case 39:
            _context.prev = 39;
            _iterator.f();
            return _context.finish(39);
          case 42:
            _context.next = 44;
            return (0, _createDefaultRoster.createDefaultRoster)({
              organizationId: organizationId,
              teamId: teamId,
              coach: coachUser
            });
          case 44:
            _context.next = 47;
            break;
          case 46:
            return _context.abrupt("return", res.status(400).json({
              error: error.message,
              secretMessage: "not-able-to-create-team"
            }));
          case 47:
            res.status(200).json({
              success: true,
              id: teamId
            });
            _context.next = 54;
            break;
          case 50:
            _context.prev = 50;
            _context.t2 = _context["catch"](3);
            console.log(_context.t2.message);
            return _context.abrupt("return", res.status(500).json({
              message: _context.t2.message
            }));
          case 54:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 50], [13, 19], [25, 36, 39, 42]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};