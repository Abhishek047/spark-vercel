"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.discordAuthRedirectRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _passport = _interopRequireDefault(require("passport"));
var _users = require("../users");
var _middleware = require("../middleware");
var discordAuthRedirectRoute = exports.discordAuthRedirectRoute = {
  path: "/discord/auth/redirect/",
  method: "get",
  // when we apply this middleware on redirect it checks if there is a code provided by the auth provider
  // it exchanges the token with info and access token
  // then runs the callback fn in discord strategy
  middleware: [_middleware.addDestination, _passport["default"].authenticate("discord")],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var baseUrl, userId, destination, user, token;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // the serialize and deserialize addes a userId or a userObject in req.user
            baseUrl = req.app.get("baseFrontEndUrl");
            console.log("Redirect base URl: " + baseUrl);
            userId = req.user;
            destination = req.dest;
            _context.next = 7;
            return (0, _users.getUserById)(userId);
          case 7:
            user = _context.sent;
            if (!(req.email === user.email && destination)) {
              _context.next = 11;
              break;
            }
            console.log("Linked Email:" + req.email);
            return _context.abrupt("return", res.redirect("".concat(baseUrl, "/").concat(destination)));
          case 11:
            _context.next = 13;
            return (0, _users.createUserCustomToken)(user.auth_id);
          case 13:
            token = _context.sent;
            return _context.abrupt("return", res.redirect("".concat(baseUrl, "/discord/auth/redirect?token=").concat(token)));
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500));
          case 22:
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