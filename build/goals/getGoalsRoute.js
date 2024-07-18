"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGoalsRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _users = require("../users");
var _getGoals = require("./getGoals");
var getGoalsRoute = exports.getGoalsRoute = {
  path: '/goals',
  method: 'get',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authId, user, goals;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authId = req.user.user_id;
            _context.prev = 1;
            _context.next = 4;
            return (0, _users.getUserByAuthId)(authId);
          case 4:
            user = _context.sent;
            _context.next = 7;
            return (0, _getGoals.getGoals)(user);
          case 7:
            goals = _context.sent;
            return _context.abrupt("return", res.status(200).json(goals));
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: _context.t0.message
            }));
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 11]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};