"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserInfoRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _getUserByAuthId = require("./getUserByAuthId");
var _getUserById = require("./getUserById");
var getUserInfoRoute = exports.getUserInfoRoute = {
  path: "/user-info/:userId",
  method: "get",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, userId, authUserInfo, userInfo;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authUser = req.user;
            userId = req.params.userId;
            _context.next = 4;
            return (0, _getUserByAuthId.getUserByAuthId)(authUser.user_id);
          case 4:
            authUserInfo = _context.sent;
            _context.next = 7;
            return (0, _getUserById.getUserById)(userId);
          case 7:
            userInfo = _context.sent;
            return _context.abrupt("return", res.status(200).json(userInfo));
          case 10:
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