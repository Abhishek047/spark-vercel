"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinGroup = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _groups = require("../groups");
var _exceedeGroupsLimit = require("./exceedeGroupsLimit");
var _addGroupActivity = require("./addGroupActivity");
var joinGroup = exports.joinGroup = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var organizationId, groupCode, group, ifAlreadyMember, groupExceededLimit, organizationDetails, member, activityValue;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          organizationId = _ref.organizationId, groupCode = _ref.groupCode;
          if (organizationId) {
            _context.next = 3;
            break;
          }
          throw new Error("no-org-found");
        case 3:
          _context.next = 5;
          return _models.CommunityGroups.findOne({
            group_code: groupCode
          });
        case 5:
          group = _context.sent;
          if (group) {
            _context.next = 8;
            break;
          }
          throw new Error("no-group-found");
        case 8:
          // check if already a part of group
          ifAlreadyMember = group.member_organizations.some(function (_ref3) {
            var id = _ref3.id;
            return id == organizationId;
          });
          if (!ifAlreadyMember) {
            _context.next = 12;
            break;
          }
          // already a member
          console.log("already a member");
          return _context.abrupt("return", group._id);
        case 12:
          _context.next = 14;
          return (0, _exceedeGroupsLimit.exceedeGroupsLimit)({
            organizationId: organizationId
          });
        case 14:
          groupExceededLimit = _context.sent;
          if (!groupExceededLimit) {
            _context.next = 17;
            break;
          }
          throw new Error("group-limit-exceeded");
        case 17:
          _context.next = 19;
          return (0, _groups.getGroupById)(organizationId);
        case 19:
          organizationDetails = _context.sent;
          member = {
            name: organizationDetails.name,
            id: organizationDetails._id,
            location: getLocationFromGroup(organizationDetails)
          };
          activityValue = "".concat(organizationDetails.name, " has joined");
          _context.next = 24;
          return (0, _addGroupActivity.addGroupActivity)({
            communityGroupId: group._id,
            activityName: _models.ORGANIZATION_JOINED,
            activityValue: activityValue
          });
        case 24:
          console.log("added a member");
          _context.next = 27;
          return group.updateOne({
            $push: {
              member_organizations: member
            }
          });
        case 27:
          return _context.abrupt("return", group._id);
        case 28:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function joinGroup(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var getLocationFromGroup = function getLocationFromGroup(_ref4) {
  var city = _ref4.city,
    state = _ref4.state,
    zipCode = _ref4.zipCode;
  return "".concat(city ? city : "", ",").concat(state ? state : "", ",").concat(zipCode ? zipCode : "");
};