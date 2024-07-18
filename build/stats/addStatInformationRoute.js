"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addStatInformationRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _addStatsInformation = require("./addStatsInformation");
var _permissions = require("../permissions");
var _permissionTypes = require("../permissions/permissionTypes");
var addStatInformationRoute = exports.addStatInformationRoute = {
  path: "/stats-form/",
  method: "post",
  // protectors:  [isLoggedInProtector, isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, user, createdBy, _req$body, name, teamId, gameName, interval, fields, players, time, permissionExist, statsRecordId;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            authUser = req.user;
            _context.next = 4;
            return (0, _users.getUserByAuthId)(authUser.user_id);
          case 4:
            user = _context.sent;
            createdBy = user._id;
            _req$body = req.body, name = _req$body.name, teamId = _req$body.teamId, gameName = _req$body.gameName, interval = _req$body.interval, fields = _req$body.fields, players = _req$body.players, time = _req$body.time;
            _context.next = 9;
            return (0, _permissions.hasPermission)({
              userId: createdBy,
              groupId: teamId,
              permissionType: _permissionTypes.ADMIN
            });
          case 9:
            permissionExist = _context.sent;
            if (permissionExist) {
              _context.next = 12;
              break;
            }
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "not-authorized"
            }));
          case 12:
            _context.next = 14;
            return (0, _addStatsInformation.addStatsInformation)({
              name: name,
              teamId: teamId,
              game: gameName,
              createdBy: createdBy,
              interval: interval,
              time: time,
              players: players,
              fields: fields
              // ifwant to create for a team
              // forTeam:
            });
          case 14:
            statsRecordId = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              success: true,
              statsRecordId: statsRecordId
            }));
          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: _context.t0.message
            }));
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 18]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};