"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addBulletinRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _addBulletin = require("./addBulletin");
var _getUserByAuthId = require("../users/getUserByAuthId");
var _routeProtectors = require("../route-protectors");
var addBulletinRoute = exports.addBulletinRoute = {
  method: "post",
  path: "/:groupId/bulletin/",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, user, groupId, bulletinValue, check;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            authUser = req.user;
            _context.next = 4;
            return (0, _getUserByAuthId.getUserByAuthId)(authUser.user_id);
          case 4:
            user = _context.sent;
            groupId = req.params.groupId;
            bulletinValue = req.body.bulletinValue;
            _context.next = 9;
            return (0, _addBulletin.addBulletin)({
              groupId: groupId,
              userId: user._id,
              user: user,
              bulletinValue: bulletinValue
            });
          case 9:
            check = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              success: true,
              check: check
            }));
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "Server error"
            }));
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 13]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};