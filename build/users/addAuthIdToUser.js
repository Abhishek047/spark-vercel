"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAuthIdToUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var addAuthIdToUser = exports.addAuthIdToUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var userId, authId, confirmationCode, _ref$isConfirmed, isConfirmed;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          userId = _ref.userId, authId = _ref.authId, confirmationCode = _ref.confirmationCode, _ref$isConfirmed = _ref.isConfirmed, isConfirmed = _ref$isConfirmed === void 0 ? false : _ref$isConfirmed;
          _context.next = 3;
          return _models.Users.findByIdAndUpdate(userId, {
            $set: {
              auth_id: authId,
              confirmationCode: confirmationCode,
              isConfirmed: isConfirmed
            }
          });
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addAuthIdToUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();