"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllGroupsForUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _users = require("../users");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// Get all organizatioon and teams for a user
var getAllGroupsForUser = exports.getAllGroupsForUser = {
  path: "/users/:userId/teams",
  method: "get",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authId, user, user_organization, user_teams, groupedOrganization, organization;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            authId = req.params.userId;
            _context.next = 4;
            return (0, _users.getUserByAuthId)(authId);
          case 4:
            user = _context.sent;
            _context.next = 7;
            return _models.Groups.find({
              _id: {
                $in: user.organizations
              },
              group_type: _models.ORGANIZATION
            });
          case 7:
            user_organization = _context.sent;
            _context.next = 10;
            return _models.Groups.find({
              parent_groups: {
                $in: user.organizations
              },
              group_type: _models.TEAM,
              $or: [{
                "admins.id": user._id
              }, {
                "players.id": user._id
              }]
            });
          case 10:
            user_teams = _context.sent;
            // IN UPDATE USE updateMany
            // Group it for the result
            groupedOrganization = []; // if more than 1 orgs
            if (user_organization.length > 1) {
              // Need to write grouping for more organization
            } else if (user_organization.length === 1) {
              organization = _objectSpread({}, user_organization[0].toObject());
              organization.teams = user_teams;
              groupedOrganization.push(organization);
            } else {
              console.log("NO_ORG");
            }
            return _context.abrupt("return", res.status(200).json({
              success: true,
              organizations: groupedOrganization
            }));
          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: _context.t0.message
            }));
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 16]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};