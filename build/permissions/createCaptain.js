"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCaptian = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _permissionTypes = require("./permissionTypes");
var createCaptian = exports.createCaptian = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var userId, groupId, hasCaptian, user, adminObject, groupIds, allPermissionObject;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          userId = _ref.userId, groupId = _ref.groupId;
          _context.next = 3;
          return _models.Permissions.findOne({
            groupId: groupId,
            permission_type: _permissionTypes.CAPTAIN
          });
        case 3:
          hasCaptian = _context.sent;
          if (!hasCaptian) {
            _context.next = 6;
            break;
          }
          throw new Error("Team already has a captain");
        case 6:
          _context.next = 8;
          return _models.Users.findById(userId);
        case 8:
          user = _context.sent;
          adminObject = {
            id: user._id,
            name: user.full_name,
            email: user.email,
            profile_img: user.profile_img,
            admin_type: _permissionTypes.CAPTAIN
          }; // find all the groups which have the team id as parent and update them as follow
          _context.next = 12;
          return _models.Groups.updateMany({
            parent_groups: groupId,
            "players.id": user._id
          }, {
            // add player role as player
            $set: {
              "players.$.player_role": _permissionTypes.CAPTAIN
            },
            // add player in admin too
            $push: {
              admins: adminObject
            }
          });
        case 12:
          _context.next = 14;
          return _models.Groups.find({
            parent_groups: groupId
          }).select("_id").lean();
        case 14:
          groupIds = _context.sent;
          allPermissionObject = groupIds.map(function (_ref3) {
            var _id = _ref3._id;
            return {
              userId: user._id,
              groupId: _id,
              permission_type: _permissionTypes.CAPTAIN
            };
          });
          _context.next = 18;
          return _models.Permissions.insertMany(allPermissionObject);
        case 18:
          console.log("updated_permission_to_captain");
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createCaptian(_x) {
    return _ref2.apply(this, arguments);
  };
}();