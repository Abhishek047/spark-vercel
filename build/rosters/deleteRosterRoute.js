"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRosterRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _users = require("../users");
var _deleteRoster = require("./deleteRoster");
var deleteRosterRoute = exports.deleteRosterRoute = {
  path: "/rosters/:id",
  method: "delete",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var userAuthId, rosterId, user;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            userAuthId = req.user.uid;
            rosterId = req.params.id;
            _context.prev = 2;
            _context.next = 5;
            return (0, _users.getUserByAuthId)(userAuthId);
          case 5:
            user = _context.sent;
            _context.next = 8;
            return (0, _deleteRoster.deleteRoster)(rosterId, user._id);
          case 8:
            res.sendStatus(200);
            _context.next = 15;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0.message);
            res.sendStatus(500);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 11]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};