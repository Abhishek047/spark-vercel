"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupDetails = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _excluded = ["member_organizations"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var getGroupDetails = exports.getGroupDetails = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(groupId, organizationId) {
    var group, groupActivity, member_organizations, rest, membersId, memberOrganizations;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.CommunityGroups.findOne({
            _id: groupId,
            "member_organizations.id": organizationId
          }).lean();
        case 2:
          group = _context.sent;
          if (group) {
            _context.next = 5;
            break;
          }
          throw new Error("no-group-found");
        case 5:
          _context.next = 7;
          return _models.CommunityGroupsActivity.find({
            community_group: groupId
          }).lean();
        case 7:
          groupActivity = _context.sent;
          member_organizations = group.member_organizations, rest = (0, _objectWithoutProperties2["default"])(group, _excluded);
          membersId = member_organizations.map(function (_ref2) {
            var id = _ref2.id;
            return id;
          });
          _context.next = 12;
          return _models.Groups.find({
            group_type: _models.ORGANIZATION,
            _id: {
              $in: membersId
            }
          }).lean();
        case 12:
          memberOrganizations = _context.sent;
          return _context.abrupt("return", _objectSpread(_objectSpread({}, rest), {}, {
            memberOrganizations: memberOrganizations,
            groupActivity: groupActivity
          }));
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getGroupDetails(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();