"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onBoardingCompleteRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _users = require("../users");
var _routeProtectors = require("../route-protectors");
/*
    The client will send a request to this route
    when a player completes the onboarding flow
*/
var onBoardingCompleteRoute = exports.onBoardingCompleteRoute = {
  method: "post",
  path: "/users/:userId/onboarding/complete",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authId, authUser, params, user, userId, newUser;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            authId = req.params.userId;
            authUser = req.user;
            params = req.body;
            params.isOnboarded = true;
            // 0. Can make a userFields check here

            // 1. Make sure the user is trying to update their own data and not someone else's
            if (!(authId !== authUser.user_id)) {
              _context.next = 7;
              break;
            }
            return _context.abrupt("return", res.status(403).json({
              message: "Users can only update their own data"
            }));
          case 7:
            _context.next = 9;
            return (0, _users.getUserByAuthId)(authId);
          case 9:
            user = _context.sent;
            userId = user._id; // 3. Update the user's info to include all the onboarding data
            _context.next = 13;
            return (0, _users.updateUser)(userId, params);
          case 13:
            newUser = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              user: newUser
            }));
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: "Server Error"
            }));
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 17]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};