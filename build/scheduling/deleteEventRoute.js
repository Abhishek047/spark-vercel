"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteEventRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _deleteEvent = require("./deleteEvent");
var deleteEventRoute = exports.deleteEventRoute = {
  path: "/events/:eventId",
  method: "delete",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var eventId, requesterAuthId, requesterUser;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            eventId = req.params.eventId; //   coach auth_id
            requesterAuthId = req.user.uid;
            _context.prev = 2;
            _context.next = 5;
            return (0, _users.getUserByAuthId)(requesterAuthId);
          case 5:
            requesterUser = _context.sent;
            if (requesterUser) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return", res.status(404).json({
              success: false,
              message: "user-not-found"
            }));
          case 8:
            _context.next = 10;
            return (0, _deleteEvent.deleteEvent)({
              eventId: eventId,
              userId: requesterUser.id
            });
          case 10:
            res.sendStatus(200);
            _context.next = 17;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(500).send({
              success: false,
              error: _context.t0.message
            }));
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 13]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};