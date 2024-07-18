"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWarRoomMatchRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _getWarRoomMatch = require("./getWarRoomMatch");
var getWarRoomMatchRoute = exports.getWarRoomMatchRoute = {
  path: "/:matchId/war-room",
  method: "get",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, matchId, user, match;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authUser = req.user;
            matchId = req.params.matchId;
            _context.prev = 2;
            _context.next = 5;
            return (0, _users.getUserByAuthId)(authUser.user_id);
          case 5:
            user = _context.sent;
            if (user) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return", res.status(404).json({
              message: "no-user-found"
            }));
          case 8:
            _context.next = 10;
            return (0, _getWarRoomMatch.getWarRoomMatch)({
              matchId: matchId,
              userId: user._id
            });
          case 10:
            match = _context.sent;
            if (match) {
              _context.next = 13;
              break;
            }
            return _context.abrupt("return", res.status(404).json({
              message: "no-session-found"
            }));
          case 13:
            return _context.abrupt("return", res.status(200).json({
              success: true,
              match: match
            }));
          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: _context.t0.message
            }));
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 16]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};