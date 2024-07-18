"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _getUserByAuthId = require("./getUserByAuthId");
var _getUserById = require("./getUserById");
var getUserRoute = exports.getUserRoute = {
  path: "/users/:authId",
  method: "get",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, authId, authUserInfo;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authUser = req.user;
            authId = req.params.authId;
            if (!(authId === (authUser === null || authUser === void 0 ? void 0 : authUser.user_id))) {
              _context.next = 7;
              break;
            }
            _context.next = 5;
            return (0, _getUserByAuthId.getUserByAuthId)(authUser.user_id);
          case 5:
            authUserInfo = _context.sent;
            return _context.abrupt("return", res.status(200).json(authUserInfo));
          case 7:
            return _context.abrupt("return", res.status(403).json({
              message: "Users can only view their own data"
            }));
          case 8:
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