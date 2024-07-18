"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCommunityGroup = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _getGroupCreatedBy = require("../groups/getGroupCreatedBy");
var _uuid = require("uuid");
var _addGroupActivity = require("./addGroupActivity");
var createCommunityGroup = exports.createCommunityGroup = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var name, state, description, creatorId, organizationId, group, admins, member_organizations, newCommunityGroup, newGroup, activityName, activityValue;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          name = _ref.name, state = _ref.state, description = _ref.description, creatorId = _ref.creatorId, organizationId = _ref.organizationId;
          _context.next = 3;
          return (0, _getGroupCreatedBy.getOrganizationCreatedBy)(creatorId, organizationId);
        case 3:
          group = _context.sent;
          if (group) {
            _context.next = 6;
            break;
          }
          throw new Error("no-org-found");
        case 6:
          // check group memberships not more than 4
          admins = [creatorId];
          member_organizations = [{
            name: group.name,
            id: group._id,
            location: getLocationFromGroup(group)
          }];
          newCommunityGroup = {
            name: name,
            description: description,
            state: state,
            admins: admins,
            created_by: creatorId,
            member_organizations: member_organizations,
            group_code: (0, _uuid.v4)().split("-")[0].toUpperCase()
          };
          newGroup = new _models.CommunityGroups(newCommunityGroup);
          _context.next = 12;
          return newGroup.save();
        case 12:
          activityName = _models.GROUP_CREATED;
          activityValue = "Group created";
          _context.next = 16;
          return (0, _addGroupActivity.addGroupActivity)({
            communityGroupId: newGroup._id,
            activityName: activityName,
            activityValue: activityValue
          });
        case 16:
          return _context.abrupt("return", newGroup._id);
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createCommunityGroup(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var getLocationFromGroup = function getLocationFromGroup(_ref3) {
  var city = _ref3.city,
    state = _ref3.state,
    zipCode = _ref3.zipCode;
  return "".concat(city ? city : "", ",").concat(state ? state : "", ",").concat(zipCode ? zipCode : "");
};