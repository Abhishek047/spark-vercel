"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addRoundRobinGroupRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _createRoundRobinGroup = require("./createRoundRobinGroup");
var addRoundRobinGroupRoute = exports.addRoundRobinGroupRoute = {
  method: "post",
  path: "/tournament/group/add",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, _req$body, tournamentId, groupName, teams, user, groupId;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authUser = req.user;
            _context.prev = 1;
            _req$body = req.body, tournamentId = _req$body.tournamentId, groupName = _req$body.groupName, teams = _req$body.teams;
            _context.next = 5;
            return (0, _users.getUserByAuthId)(authUser.user_id);
          case 5:
            user = _context.sent;
            _context.next = 8;
            return (0, _createRoundRobinGroup.createRoundRobinGroup)({
              tournamentId: tournamentId,
              groupName: groupName,
              teams: teams
            });
          case 8:
            groupId = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              success: true,
              groupId: groupId
            }));
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0.message);
            if (!(_context.t0.message === "no-org-found")) {
              _context.next = 17;
              break;
            }
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "You are not part of that group"
            }));
          case 17:
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "Server error"
            }));
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 12]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};