"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupsWithOrganizationId = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var getGroupsWithOrganizationId = exports.getGroupsWithOrganizationId = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var organizationId,
      groups,
      groupIds,
      activities,
      groupedActivitiesData,
      groupsWithActivity,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          organizationId = _args.length > 0 && _args[0] !== undefined ? _args[0] : "";
          if (organizationId) {
            _context.next = 3;
            break;
          }
          throw new Error("no-org-found");
        case 3:
          _context.next = 5;
          return _models.CommunityGroups.find({
            "member_organizations.id": organizationId
          }).lean();
        case 5:
          groups = _context.sent;
          groupIds = groups.map(function (group) {
            return group._id;
          });
          _context.next = 9;
          return _models.CommunityGroupsActivity.aggregate([{
            $match: {
              community_group: {
                $in: groupIds
              }
            }
          }, {
            $limit: 10
          }, {
            $sort: {
              createdAt: -1
            }
          }, {
            $group: {
              _id: "$community_group",
              activities: {
                $push: {
                  name: "$activity_name",
                  value: "$activity_value",
                  createdAt: "$createdAt"
                }
              }
            }
          }]);
        case 9:
          activities = _context.sent;
          groupedActivitiesData = activities.reduce(function (grouped, data) {
            grouped["".concat(data._id)] = data;
            return grouped;
          }, {});
          groupsWithActivity = groups.map(function (group) {
            var _groupedActivitiesDat;
            return _objectSpread(_objectSpread({}, group), {}, {
              activities: groupedActivitiesData["".concat(group._id)] ? ((_groupedActivitiesDat = groupedActivitiesData["".concat(group._id)]) === null || _groupedActivitiesDat === void 0 ? void 0 : _groupedActivitiesDat.activities) || [] : []
            });
          });
          return _context.abrupt("return", groupsWithActivity);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getGroupsWithOrganizationId() {
    return _ref.apply(this, arguments);
  };
}();