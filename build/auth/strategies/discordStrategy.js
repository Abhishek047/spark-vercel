"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.discordStrategy = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _passportDiscord = _interopRequireDefault(require("passport-discord"));
var _passport = _interopRequireDefault(require("passport"));
var _users = require("../../users/");
var _uuid = require("uuid");
var DiscordStrategy = _passportDiscord["default"].Strategy;

// middleware that runs when we use passport.authenticate
_passport["default"].serializeUser(function (id, done) {
  done(null, id);
});
_passport["default"].deserializeUser(function (id, done) {
  done(id, null);
});
var discordStrategy = exports.discordStrategy = function discordStrategy(app) {
  var scopes = ["identify", "email", "guilds", "guilds.join"];
  var strategyOptions = {
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    // redirect uri,
    // if it's our server then the verifyCallback function runs
    // but if it's a client side callback it dosent work, but the authentication is done in both cases
    callbackURL: process.env.DISCORD_CALLBACK_URL,
    scope: scopes,
    passReqToCallback: true
  };
  var verifyCallback = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, accessToken, refreshToken, profile, done) {
      var linkEmail, email, verified, id, username, discriminator, userId, user, _user, password, authId, newUserObject, newUserId, discordUpdateObject;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            linkEmail = req.cookies["savedEmail"];
            console.log("Todo on profile");
            email = profile.email, verified = profile.verified, id = profile.id, username = profile.username, discriminator = profile.discriminator; //  first check if user exist or not
            console.log("Finding user...");
            if (!(linkEmail !== undefined)) {
              _context.next = 13;
              break;
            }
            console.log("Linking email:" + linkEmail);
            _context.next = 9;
            return (0, _users.getUserByEmail)(linkEmail);
          case 9:
            user = _context.sent;
            userId = user === null || user === void 0 ? void 0 : user._id;
            _context.next = 18;
            break;
          case 13:
            console.log("Email:" + email);
            _context.next = 16;
            return (0, _users.getUserByEmail)(email);
          case 16:
            _user = _context.sent;
            userId = _user === null || _user === void 0 ? void 0 : _user._id;
          case 18:
            console.log(userId ? "User found!" : "User not found!");
            // if not then create a user
            if (userId) {
              _context.next = 30;
              break;
            }
            console.log("Create new user");
            // a. in firebase
            password = (0, _uuid.v4)();
            _context.next = 24;
            return (0, _users.createUserInAuth)(email, password);
          case 24:
            authId = _context.sent;
            // b. in mongo
            newUserObject = {
              email: email,
              confirmationCode: password,
              isConfirmed: verified,
              auth_id: authId
            };
            _context.next = 28;
            return (0, _users.createUserInDB)(newUserObject);
          case 28:
            newUserId = _context.sent;
            userId = newUserId;
          case 30:
            // c. update discord info
            discordUpdateObject = {
              discordId: id,
              username: username,
              discriminator: discriminator,
              userId: userId
            };
            (0, _users.updateDiscordInfo)(discordUpdateObject);
            done(null, userId);
            _context.next = 39;
            break;
          case 35:
            _context.prev = 35;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);
            done(null, null);
          case 39:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 35]]);
    }));
    return function verifyCallback(_x, _x2, _x3, _x4, _x5) {
      return _ref.apply(this, arguments);
    };
  }();
  _passport["default"].use(new DiscordStrategy(strategyOptions, verifyCallback));
  return app;
};