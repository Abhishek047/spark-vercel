"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTeamRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _deleteTeam = require("./deleteTeam");
var _users = require("../users");
var deleteTeamRoute = exports.deleteTeamRoute = {
  path: "/teams/:id",
  method: "delete",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var teamId, userAuthId, user, team;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            teamId = req.params.id;
            userAuthId = req.user.uid;
            _context.prev = 2;
            _context.next = 5;
            return (0, _users.getUserByAuthId)(userAuthId);
          case 5:
            user = _context.sent;
            _context.next = 8;
            return (0, _deleteTeam.deleteTeam)(teamId, user._id);
          case 8:
            team = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              team: team
            }));
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            if (!(_context.t0.message === "not-authorized-to-delete")) {
              _context.next = 17;
              break;
            }
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: _context.t0.message
            }));
          case 17:
            return _context.abrupt("return", res.status(500));
          case 18:
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