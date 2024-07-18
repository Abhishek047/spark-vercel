"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onboardPlayerRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _uuid = require("uuid");
var _players = require("../players");
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
/*
    The client will send a request to this route
    when a player completes the onboarding flow
*/
var onboardPlayerRoute = exports.onboardPlayerRoute = {
  method: 'post',
  path: '/users/:userId/onboarding/player',
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authId, _req$body, fullName, gamerName, grade, socialMediaLinks, tshirtSize, gamesAndRoles, bio, baseUrl, authUser, user, userId;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authId = req.params.userId;
            _req$body = req.body, fullName = _req$body.fullName, gamerName = _req$body.gamerName, grade = _req$body.grade, socialMediaLinks = _req$body.socialMediaLinks, tshirtSize = _req$body.tshirtSize, gamesAndRoles = _req$body.gamesAndRoles, bio = _req$body.bio;
            baseUrl = req.app.get('baseFrontEndUrl');
            authUser = req.user; // 1. Make sure the user is trying to update their own data and not someone else's
            if (!(authId !== authUser.user_id)) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return", res.status(403).json({
              message: 'Users can only update their own data'
            }));
          case 6:
            _context.next = 8;
            return (0, _users.getUserByAuthId)(authId);
          case 8:
            user = _context.sent;
            userId = user.id; // 3. Update the user's info to include all the onboarding data
            _context.next = 12;
            return (0, _players.updatePlayer)(userId, {
              fullName: fullName,
              gamerName: gamerName,
              grade: grade,
              socialMediaLinks: socialMediaLinks,
              tshirtSize: tshirtSize,
              gamesAndRoles: gamesAndRoles,
              bio: bio
            });
          case 12:
            _context.next = 14;
            return (0, _users.setUserToOnboarded)(userId);
          case 14:
            res.status(200).json();
          case 15:
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