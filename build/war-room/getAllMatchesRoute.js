"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllMatchesRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _users = require("../users");
var _scheduling = require("../scheduling");
var getAllMatchesRoute = exports.getAllMatchesRoute = {
  path: "/war-room",
  method: "get",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, user, matches;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authUser = req.user;
            _context.prev = 1;
            _context.next = 4;
            return (0, _users.getUserByAuthId)(authUser.user_id);
          case 4:
            user = _context.sent;
            if (user) {
              _context.next = 7;
              break;
            }
            return _context.abrupt("return", res.status(404).json({
              message: "no-user-found"
            }));
          case 7:
            _context.next = 9;
            return (0, _scheduling.getAllWarRoomEventsForUser)(user._id);
          case 9:
            matches = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              success: true,
              matches: matches
            }));
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: _context.t0.message
            }));
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 13]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};