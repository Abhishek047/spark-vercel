"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exceedeGroupsLimit = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var exceedeGroupsLimit = exports.exceedeGroupsLimit = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var organizationId, groupsForOrganization;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          organizationId = _ref.organizationId;
          _context.next = 3;
          return _models.CommunityGroups.find({
            "member_organizations.id": organizationId
          }).lean();
        case 3:
          groupsForOrganization = _context.sent;
          if (!(groupsForOrganization.length >= 4)) {
            _context.next = 8;
            break;
          }
          return _context.abrupt("return", true);
        case 8:
          return _context.abrupt("return", false);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function exceedeGroupsLimit(_x) {
    return _ref2.apply(this, arguments);
  };
}();