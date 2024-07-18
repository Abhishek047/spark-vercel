"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTeamRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _rosters = require("../rosters");
var _models = require("../models");
var _invitations = require("../invitations");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var getTeamRoute = exports.getTeamRoute = {
  path: "/teams/:teamId",
  method: "get",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var teamId, team, invitations, roster, teamWithRosters;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            teamId = req.params.teamId;
            _context.prev = 1;
            _context.next = 4;
            return _models.Groups.findOne({
              parent_groups: teamId,
              group_type: _models.TEAM
            }).select("-parent_groups");
          case 4:
            team = _context.sent;
            if (team) {
              _context.next = 7;
              break;
            }
            return _context.abrupt("return", res.status(404).json({
              success: false,
              team: [],
              message: "No team found"
            }));
          case 7:
            _context.next = 9;
            return (0, _invitations.getAllInvitationsForTeam)(teamId);
          case 9:
            invitations = _context.sent;
            _context.next = 12;
            return (0, _rosters.getRostersForTeam)(teamId);
          case 12:
            roster = _context.sent;
            // make a object that has all the roster in a team object
            teamWithRosters = _objectSpread(_objectSpread({}, team.toObject()), {}, {
              rosters: roster,
              invitations: invitations
            });
            return _context.abrupt("return", res.status(200).json({
              team: teamWithRosters
            }));
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(500).json({
              team: [],
              message: _context.t0.message,
              success: false
            }));
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 17]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};