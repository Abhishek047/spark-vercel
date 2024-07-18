"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _getUserById = require("./getUserById");
var _updateUser = require("./updateUser");
var updateUserRoute = exports.updateUserRoute = {
  method: 'post',
  path: '/users/:userId',
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector, _routeProtectors.isOnboardedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var userId, updates, user, userFromDocumnet, updatedUser;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            userId = req.params.userId;
            updates = req.body.updates;
            user = req.user;
            _context.next = 5;
            return (0, _getUserById.getUserById)(userId);
          case 5:
            userFromDocumnet = _context.sent;
            if (!(user.user_id === userFromDocumnet.auth_id)) {
              _context.next = 13;
              break;
            }
            _context.next = 9;
            return (0, _updateUser.updateUser)(userId, updates);
          case 9:
            updatedUser = _context.sent;
            res.send(updatedUser);
            _context.next = 14;
            break;
          case 13:
            res.status(403).json({
              message: 'User can only make changes to their own info'
            });
          case 14:
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