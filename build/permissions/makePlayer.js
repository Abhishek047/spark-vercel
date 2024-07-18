"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePlayer = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _permissionTypes = require("./permissionTypes");
var makePlayer = exports.makePlayer = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var userId, groupId, groupIds, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          userId = _ref.userId, groupId = _ref.groupId;
          _context.next = 3;
          return _models.Groups.find({
            parent_groups: groupId
          }).select("_id").lean();
        case 3:
          groupIds = _context.sent;
          _context.next = 6;
          return _models.Permissions.deleteMany({
            groupId: groupIds.map(function (_ref3) {
              var _id = _ref3._id;
              return _id;
            }),
            userId: userId,
            permission_type: {
              $ne: _permissionTypes.PLAYER
            }
          });
        case 6:
          _context.next = 8;
          return _models.Users.findById(userId);
        case 8:
          user = _context.sent;
          _context.next = 11;
          return _models.Groups.updateMany({
            parent_groups: groupId,
            "players.id": user._id
          }, {
            // add player role as player
            $set: {
              "players.$.player_role": _permissionTypes.PLAYER
            },
            // remove player in admin too
            $pull: {
              admins: {
                id: user._id
              }
            }
          });
        case 11:
          console.log("stripped off all the permissions, only player remains");
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function makePlayer(_x) {
    return _ref2.apply(this, arguments);
  };
}();