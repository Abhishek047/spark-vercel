"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTeam = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _permissions = require("../permissions");
var createTeam = exports.createTeam = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var _ref$name, name, _ref$game, game, organizationId, _ref$coach, coach, url, admin, newTeam, parent_groups;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _ref$name = _ref.name, name = _ref$name === void 0 ? "" : _ref$name, _ref$game = _ref.game, game = _ref$game === void 0 ? "" : _ref$game, organizationId = _ref.organizationId, _ref$coach = _ref.coach, coach = _ref$coach === void 0 ? {} : _ref$coach, url = _ref.url;
          if (!(name === "" || game === "")) {
            _context.next = 3;
            break;
          }
          throw new Error("requied-fields-not-filled");
        case 3:
          if (coach._id) {
            _context.next = 5;
            break;
          }
          throw new Error("invalid-coach");
        case 5:
          // create the user the admin
          admin = [{
            id: coach._id,
            name: coach.full_name,
            email: coach.email,
            profile_img: coach.profile_img,
            admin_type: "ADMIN"
          }]; // create the new team
          newTeam = new _models.Groups({
            name: name,
            game: game,
            image_url: url,
            group_type: _models.TEAM,
            created_by: coach._id,
            admins: admin
          }); // add id's in parent group
          parent_groups = [organizationId, newTeam._id];
          _context.next = 10;
          return newTeam.save();
        case 10:
          _context.next = 12;
          return newTeam.updateOne({
            $set: {
              parent_groups: parent_groups
            }
          });
        case 12:
          _context.next = 14;
          return (0, _permissions.createAdminPermissionForGroup)({
            userId: coach._id,
            groupId: newTeam._id
          });
        case 14:
          return _context.abrupt("return", newTeam._id);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createTeam(_x) {
    return _ref2.apply(this, arguments);
  };
}();