"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addGroupActivity = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var addGroupActivity = exports.addGroupActivity = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var communityGroupId, activityName, activityValue, newActivity;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          communityGroupId = _ref.communityGroupId, activityName = _ref.activityName, activityValue = _ref.activityValue;
          if (communityGroupId) {
            _context.next = 3;
            break;
          }
          throw new Error("no-group-id");
        case 3:
          if (!(!activityName || !activityValue)) {
            _context.next = 5;
            break;
          }
          throw new Error("fields-empty");
        case 5:
          _context.next = 7;
          return new _models.CommunityGroupsActivity({
            activity_name: activityName,
            activity_value: activityValue,
            community_group: communityGroupId
          }).save();
        case 7:
          newActivity = _context.sent;
          console.log("Activity created + " + activityName);
          return _context.abrupt("return", newActivity._id);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addGroupActivity(_x) {
    return _ref2.apply(this, arguments);
  };
}();