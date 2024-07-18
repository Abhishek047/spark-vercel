"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCoachForSchool = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var isCoachForSchool = exports.isCoachForSchool = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(coachId, organizationId) {
    var user_organization;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.Groups.findOne({
            parent_groups: organizationId,
            group_type: _models.ORGANIZATION,
            admins: {
              $elemMatch: {
                id: coachId
              }
            }
          });
        case 2:
          user_organization = _context.sent;
          return _context.abrupt("return", user_organization ? true : false);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function isCoachForSchool(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();