"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserByEmail = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
// MONGO_DB MIGTATION

var getUserByEmail = exports.getUserByEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(email) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.Users.findOne({
            email: email
          });
        case 2:
          user = _context.sent;
          if (user) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", null);
        case 5:
          return _context.abrupt("return", user);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getUserByEmail(_x) {
    return _ref.apply(this, arguments);
  };
}();