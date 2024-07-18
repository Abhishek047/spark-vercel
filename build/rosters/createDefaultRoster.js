"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDefaultRoster = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _permissions = require("../permissions");
var createDefaultRoster = exports.createDefaultRoster = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var organizationId, teamId, coach, admin, defaultRoster, parent_groups;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          organizationId = _ref.organizationId, teamId = _ref.teamId, coach = _ref.coach;
          _context.prev = 1;
          if (coach._id) {
            _context.next = 4;
            break;
          }
          throw new Error("invalid-coach");
        case 4:
          // add admin
          admin = [{
            id: coach._id,
            name: coach.full_name,
            email: coach.email,
            profile_img: coach.profile_img,
            admin_type: "ADMIN"
          }]; // create default-roster group
          defaultRoster = new _models.Groups({
            name: "DEFAULT_ROSTER",
            group_type: _models.ROSTER,
            admins: admin,
            created_by: coach._id
          }); // create parent group
          parent_groups = [organizationId, teamId, defaultRoster._id];
          _context.next = 9;
          return defaultRoster.save();
        case 9:
          _context.next = 11;
          return defaultRoster.updateOne({
            $set: {
              parent_groups: parent_groups
            }
          });
        case 11:
          _context.next = 13;
          return (0, _permissions.createAdminPermissionForGroup)({
            userId: coach._id,
            groupId: defaultRoster._id
          });
        case 13:
          console.log("DefaultRosterCreated");
          _context.next = 20;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0.message);
          console.log("Error creating default roster");
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 16]]);
  }));
  return function createDefaultRoster(_x) {
    return _ref2.apply(this, arguments);
  };
}();