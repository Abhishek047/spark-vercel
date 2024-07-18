"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addGroupTrialDate = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var addGroupTrialDate = exports.addGroupTrialDate = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(groupId) {
    var group, start, trialEndDate, queryForTrial;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.Groups.findById(groupId);
        case 2:
          group = _context.sent;
          if (!(group.group_type !== _models.ORGANIZATION)) {
            _context.next = 5;
            break;
          }
          throw new Error("not-a-organization");
        case 5:
          start = new Date(group.createdAt);
          trialEndDate = new Date(start.setDate(start.getDate() + 30));
          queryForTrial = {
            subscription_status: _models.TRIAL,
            subscription_endDate: trialEndDate
          };
          _context.next = 10;
          return group.updateOne({
            $set: queryForTrial
          });
        case 10:
          return _context.abrupt("return", "".concat(group.name, " added trial"));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addGroupTrialDate(_x) {
    return _ref.apply(this, arguments);
  };
}();