"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllAncestorGroups = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _getGroupsFor = require("./getGroupsFor");
/*
    This function will return an array containing
    all the "ancestor" groups of a given group - 
    that is, all the groups that a group belongs to,
    and all the groups that THOSE groups belong to,
    and so on.
*/
var getAllAncestorGroups = exports.getAllAncestorGroups = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(groupId) {
    var parentGroups;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _getGroupsFor.getGroupsFor)(groupId);
        case 2:
          parentGroups = _context.sent;
          if (!(parentGroups.length === 0)) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", []);
        case 5:
          _context.t0 = [];
          _context.t1 = (0, _toConsumableArray2["default"])(parentGroups);
          _context.next = 9;
          return Promise.all(parentGroups.map(function (parentGroup) {
            return getAllAncestorGroups(parentGroup);
          }));
        case 9:
          _context.t2 = _context.sent;
          _context.t3 = [_context.t2];
          return _context.abrupt("return", _context.t0.concat.call(_context.t0, _context.t1, _context.t3));
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllAncestorGroups(_x) {
    return _ref.apply(this, arguments);
  };
}();