"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrganizationCreatedBy = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var getOrganizationCreatedBy = exports.getOrganizationCreatedBy = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userId, organizationId) {
    var group;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          group = _models.Groups.findOne({
            _id: organizationId,
            created_by: userId,
            group_type: _models.ORGANIZATION
          });
          return _context.abrupt("return", group);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getOrganizationCreatedBy(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();