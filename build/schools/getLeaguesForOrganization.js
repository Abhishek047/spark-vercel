"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLeaguesForOrganizations = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var getLeaguesForOrganizations = exports.getLeaguesForOrganizations = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(organizationId) {
    var leagues;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.League.find({
            groupId: organizationId
          }).lean();
        case 2:
          leagues = _context.sent;
          return _context.abrupt("return", leagues);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getLeaguesForOrganizations(_x) {
    return _ref.apply(this, arguments);
  };
}();