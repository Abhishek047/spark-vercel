"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOrganizationToPlayer = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _permissions = require("../permissions");
var addOrganizationToPlayer = exports.addOrganizationToPlayer = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userId, orgnaizationId) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.Users.findByIdAndUpdate(userId, {
            $push: {
              organizations: orgnaizationId
            }
          }, {
            "new": true
          });
        case 2:
          _context.next = 4;
          return (0, _permissions.createNewPlayerPermission)({
            userId: userId,
            groupId: orgnaizationId
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addOrganizationToPlayer(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();