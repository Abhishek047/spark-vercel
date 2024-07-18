"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllScrimmage = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var getAllScrimmage = exports.getAllScrimmage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var activeScrimmages;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.Scrimmage.find({
            open: true
          }).sort({
            createdAt: "desc"
          }).lean();
        case 2:
          activeScrimmages = _context.sent;
          return _context.abrupt("return", activeScrimmages);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllScrimmage() {
    return _ref.apply(this, arguments);
  };
}();