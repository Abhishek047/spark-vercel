"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTeam = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var updateTeam = exports.updateTeam = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var teamId, updateValues, query, key;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          teamId = _ref.teamId, updateValues = _ref.updateValues;
          query = {};
          for (key in updateValues) {
            //could also be req.query and req.params
            updateValues[key] !== "" ? query[key] = updateValues[key] : null;
          }
          _context.next = 5;
          return _models.Groups.findByIdAndUpdate(teamId, {
            $set: query
          }, {
            "new": true
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function updateTeam(_x) {
    return _ref2.apply(this, arguments);
  };
}();