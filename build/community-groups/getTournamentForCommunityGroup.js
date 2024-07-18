"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTournamentForCommunityGroup = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var getTournamentForCommunityGroup = exports.getTournamentForCommunityGroup = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var groupId, tournaments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          groupId = _ref.groupId;
          if (groupId) {
            _context.next = 3;
            break;
          }
          throw new Error("no-groupId");
        case 3:
          _context.next = 5;
          return _models.Tournament.find({
            community_group: groupId
          });
        case 5:
          tournaments = _context.sent;
          return _context.abrupt("return", tournaments);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getTournamentForCommunityGroup(_x) {
    return _ref2.apply(this, arguments);
  };
}();