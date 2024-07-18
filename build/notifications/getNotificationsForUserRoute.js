"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNotificationsForUserRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _getNotificationsForUser = require("./getNotificationsForUser");
var getNotificationsForUserRoute = exports.getNotificationsForUserRoute = {
  path: "/users/:userId/notifications",
  method: "get",
  // Users must be logged in to make requests to this route, but they don't have to be verified
  protectors: [_routeProtectors.isLoggedInProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authId, authUser, user, notifications;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // 1. Get all our data
            authId = req.params.userId; // authId is the automatically assigned id from Firebase Auth
            authUser = req.user; // This is the firebase user info, added by the 'addUserToRoute' middleware in server.js
            // 2. Make sure whoever sent this request is actually that user
            if (!(authId !== (authUser === null || authUser === void 0 ? void 0 : authUser.user_id))) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return", res.status(403).json({
              message: "Users can only view their own notifications"
            }));
          case 4:
            _context.next = 6;
            return (0, _users.getUserByAuthId)(authId);
          case 6:
            user = _context.sent;
            _context.next = 9;
            return (0, _getNotificationsForUser.getNotificationsForUser)(user.id);
          case 9:
            notifications = _context.sent;
            // 4. Send them back in the response
            res.status(200).json(notifications);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};