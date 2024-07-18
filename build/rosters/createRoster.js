"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRoster = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _permissions = require("../permissions");
// Mongo Db miongration

var createRoster = exports.createRoster = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var _ref$name, name, teamId, _ref$organizationId, organizationId, _ref$coach, coach, admin, newRoster, parent_groups, team;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _ref$name = _ref.name, name = _ref$name === void 0 ? "" : _ref$name, teamId = _ref.teamId, _ref$organizationId = _ref.organizationId, organizationId = _ref$organizationId === void 0 ? null : _ref$organizationId, _ref$coach = _ref.coach, coach = _ref$coach === void 0 ? {} : _ref$coach;
          if (!(name === "")) {
            _context.next = 3;
            break;
          }
          throw new Error("requied-fields-not-filled");
        case 3:
          // need to create a check if coach is provided or not
          // create an admin of user
          admin = [{
            id: coach._id,
            name: coach.full_name,
            email: coach.email,
            profile_img: coach.profile_img,
            admin_type: "ADMIN"
          }]; // create default roster
          newRoster = new _models.Groups({
            name: name,
            group_type: _models.ROSTER,
            admins: admin,
            created_by: coach._id
          }); // add parent groups
          parent_groups = []; // check if organizationId is provided or not
          if (organizationId) {
            _context.next = 17;
            break;
          }
          _context.next = 9;
          return _models.Groups.findById(teamId);
        case 9:
          team = _context.sent;
          if (!team) {
            _context.next = 14;
            break;
          }
          parent_groups = [].concat((0, _toConsumableArray2["default"])(team.parent_groups), [newRoster._id]);
          _context.next = 15;
          break;
        case 14:
          throw new Error("no-team-found");
        case 15:
          _context.next = 18;
          break;
        case 17:
          parent_groups = [organizationId, teamId, newRoster._id];
        case 18:
          _context.next = 20;
          return newRoster.save();
        case 20:
          _context.next = 22;
          return newRoster.updateOne({
            $set: {
              parent_groups: parent_groups
            }
          });
        case 22:
          _context.next = 24;
          return (0, _permissions.createAdminPermissionForGroup)({
            userId: coach._id,
            groupId: newRoster._id
          });
        case 24:
          return _context.abrupt("return", newRoster);
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createRoster(_x) {
    return _ref2.apply(this, arguments);
  };
}();