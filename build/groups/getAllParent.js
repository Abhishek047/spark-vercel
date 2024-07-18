"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllParents = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var getAllParents = exports.getAllParents = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var parentsArray,
      parents,
      organization,
      team,
      roster,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          parentsArray = _args.length > 0 && _args[0] !== undefined ? _args[0] : [];
          console.log(parentsArray);
          _context.next = 4;
          return _models.Groups.find({
            _id: {
              $in: parentsArray
            }
          });
        case 4:
          parents = _context.sent;
          organization = {};
          team = {};
          roster = {};
          if (parents.length > 0) {
            parents.forEach(function (parent) {
              if (parent.group_type === _models.ORGANIZATION) {
                organization = parent;
              }
              if (parent.group_type === _models.TEAM) {
                team = parent;
              }
              if (parent.group_type === _models.ROSTER) {
                roster = parent;
              }
            });
          }
          return _context.abrupt("return", {
            organization: organization,
            roster: roster,
            team: team
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllParents() {
    return _ref.apply(this, arguments);
  };
}();