"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createScrimmageRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _createScrimmage = require("./createScrimmage");
var createScrimmageRoute = exports.createScrimmageRoute = {
  path: "/scrimmage/",
  method: "post",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, user, createdBy, _req$body, game, startDate, skillLevel, organizationId, teams, scrimmageId;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authUser = req.user;
            _context.prev = 1;
            _context.next = 4;
            return (0, _users.getUserByAuthId)(authUser.user_id);
          case 4:
            user = _context.sent;
            createdBy = user._id; // ----
            // Check permission
            // ----
            _req$body = req.body, game = _req$body.game, startDate = _req$body.startDate, skillLevel = _req$body.skillLevel, organizationId = _req$body.organizationId, teams = _req$body.teams;
            _context.next = 9;
            return (0, _createScrimmage.createScrimmage)({
              game: game,
              date: startDate,
              organizationId: organizationId,
              teams: teams,
              createdBy: createdBy,
              skillLevel: skillLevel
            });
          case 9:
            scrimmageId = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              success: true,
              scrimmageId: scrimmageId
            }));
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: _context.t0.message
            }));
          case 17:
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