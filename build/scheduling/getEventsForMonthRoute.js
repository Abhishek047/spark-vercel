"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEventsForMonthRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _users = require("../users");
var _getEventsForMonth = require("./getEventsForMonth");
var getEventsForMonthRoute = exports.getEventsForMonthRoute = {
  path: "/events/:year/:month",
  method: "get",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$params, year, month, authId, user, events;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _req$params = req.params, year = _req$params.year, month = _req$params.month;
            authId = req.user.user_id;
            _context.prev = 2;
            _context.next = 5;
            return (0, _users.getUserByAuthId)(authId);
          case 5:
            user = _context.sent;
            _context.next = 8;
            return (0, _getEventsForMonth.getEventsForMonth)({
              userEmail: user.email,
              year: year,
              month: month
            });
          case 8:
            events = _context.sent;
            return _context.abrupt("return", res.status(200).json(events));
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: _context.t0.message
            }));
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 12]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};