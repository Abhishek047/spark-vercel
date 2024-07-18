"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addBulletin = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _users = require("../users");
var _checkBasicGroupPermission = require("./checkBasicGroupPermission");
var addBulletin = exports.addBulletin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var groupId, userId, _ref$user, user, _ref$bulletinValue, bulletinValue, group, currentUser, admins, isGroupAdmin, hasPermission, newBulletinObject, currentBulletins;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          groupId = _ref.groupId, userId = _ref.userId, _ref$user = _ref.user, user = _ref$user === void 0 ? {} : _ref$user, _ref$bulletinValue = _ref.bulletinValue, bulletinValue = _ref$bulletinValue === void 0 ? "" : _ref$bulletinValue;
          _context.next = 3;
          return _models.CommunityGroups.findById(groupId);
        case 3:
          group = _context.sent;
          if (group) {
            _context.next = 6;
            break;
          }
          throw new Error("no-group-found");
        case 6:
          if (bulletinValue) {
            _context.next = 8;
            break;
          }
          throw new Error("no-value-provided");
        case 8:
          currentUser = user;
          if (currentUser._id) {
            _context.next = 14;
            break;
          }
          console.log("get-user");
          _context.next = 13;
          return (0, _users.getUserById)(userId);
        case 13:
          currentUser = _context.sent;
        case 14:
          admins = group.admins;
          isGroupAdmin = admins.includes(userId); // check if a group admin
          if (!isGroupAdmin) {
            _context.next = 20;
            break;
          }
          console.log("user-is-a-group-admin");
          _context.next = 27;
          break;
        case 20:
          _context.next = 22;
          return (0, _checkBasicGroupPermission.checkBasicGroupPermission)({
            groupId: groupId,
            userId: userId
          });
        case 22:
          hasPermission = _context.sent;
          if (hasPermission) {
            _context.next = 26;
            break;
          }
          console.log("not-an-admin-of-group");
          throw new Error("permission-required");
        case 26:
          console.log("user-is-organization-admin");
        case 27:
          newBulletinObject = {
            value: bulletinValue,
            created_by: currentUser._id,
            creator_name: currentUser.name,
            created_at: Date.now()
          };
          currentBulletins = group.bulletins || [];
          if (!currentBulletins.length) {
            _context.next = 32;
            break;
          }
          if (!currentBulletins.some(function (bulletinItem) {
            return bulletinItem.value === bulletinValue && bulletinItem.created_by === currentUser._id;
          })) {
            _context.next = 32;
            break;
          }
          throw new Error("already-created");
        case 32:
          _context.next = 34;
          return group.updateOne({
            $addToSet: {
              bulletins: newBulletinObject
            }
          });
        case 34:
          console.log("bulletin-added");
          return _context.abrupt("return", true);
        case 36:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addBulletin(_x) {
    return _ref2.apply(this, arguments);
  };
}();