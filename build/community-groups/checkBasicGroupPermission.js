"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkBasicGroupPermission = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _mongoose = require("mongoose");
var checkBasicGroupPermission = exports.checkBasicGroupPermission = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var groupId, userId, group, admins, isAdmin;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          groupId = _ref.groupId, userId = _ref.userId;
          if (userId) {
            _context.next = 3;
            break;
          }
          throw new Error("no-user");
        case 3:
          _context.next = 5;
          return _models.CommunityGroups.findById(groupId).populate("member_organizations.id").lean();
        case 5:
          group = _context.sent;
          admins = group.member_organizations.reduce(function (currentAdmins, member) {
            var _member$id;
            var adminArray = (_member$id = member.id) === null || _member$id === void 0 ? void 0 : _member$id.admins;
            currentAdmins = [].concat((0, _toConsumableArray2["default"])(currentAdmins), (0, _toConsumableArray2["default"])(adminArray));
            return currentAdmins;
          }, []); // comparing only value
          isAdmin = admins.some(function (admin) {
            return "".concat(admin.id) === "".concat(userId);
          });
          return _context.abrupt("return", isAdmin);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function checkBasicGroupPermission(_x) {
    return _ref2.apply(this, arguments);
  };
}();