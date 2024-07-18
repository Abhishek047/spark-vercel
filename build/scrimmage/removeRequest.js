"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeRequest = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var removeRequest = exports.removeRequest = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var scrimmageId, organizationId, updatedScrimmage;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          scrimmageId = _ref.scrimmageId, organizationId = _ref.organizationId;
          _context.next = 3;
          return _models.Scrimmage.findByIdAndUpdate(scrimmageId, {
            $pull: {
              requests: {
                organizationId: organizationId
              }
            }
          }, {
            "new": true
          });
        case 3:
          updatedScrimmage = _context.sent;
          return _context.abrupt("return", updatedScrimmage._id);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function removeRequest(_x) {
    return _ref2.apply(this, arguments);
  };
}();