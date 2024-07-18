"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTournamentForGroupRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _getTournamentForCommunityGroup = require("./getTournamentForCommunityGroup");
var getTournamentForGroupRoute = exports.getTournamentForGroupRoute = {
  method: "get",
  path: "/:groupId/tournament",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, groupId, tournaments;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authUser = req.user;
            _context.prev = 1;
            groupId = req.params.groupId;
            _context.next = 5;
            return (0, _getTournamentForCommunityGroup.getTournamentForCommunityGroup)({
              groupId: groupId
            });
          case 5:
            tournaments = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              success: true,
              tournaments: tournaments
            }));
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0.message);
            if (!(_context.t0.message === "no-groupId")) {
              _context.next = 14;
              break;
            }
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "You are not part of that group"
            }));
          case 14:
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "Server error"
            }));
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 9]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};