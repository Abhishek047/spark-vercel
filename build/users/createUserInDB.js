"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserInDB = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
// MONGO_DB MIGTATION

var createUserInDB = exports.createUserInDB = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var auth_id, email, confirmationCode, _ref$isConfirmed, isConfirmed, newUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          auth_id = _ref.auth_id, email = _ref.email, confirmationCode = _ref.confirmationCode, _ref$isConfirmed = _ref.isConfirmed, isConfirmed = _ref$isConfirmed === void 0 ? false : _ref$isConfirmed;
          newUser = new _models.Users({
            auth_id: auth_id,
            email: email,
            confirmationCode: confirmationCode,
            isConfirmed: isConfirmed,
            isOnboarded: false
          });
          _context.next = 4;
          return newUser.save();
        case 4:
          return _context.abrupt("return", newUser._id);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createUserInDB(_x) {
    return _ref2.apply(this, arguments);
  };
}();