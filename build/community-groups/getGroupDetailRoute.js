"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupDetailRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _getGroupDetails = require("./getGroupDetails");
var _mongoose = require("mongoose");
var getGroupDetailRoute = exports.getGroupDetailRoute = {
  method: "get",
  path: "/:groupId/:organizationId/details/",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, _req$params, groupId, organizationId, user, group;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authUser = req.user;
            _req$params = req.params, groupId = _req$params.groupId, organizationId = _req$params.organizationId;
            _context.prev = 2;
            _context.next = 5;
            return (0, _users.getUserByAuthId)(authUser.user_id);
          case 5:
            user = _context.sent;
            if (user.organizations.includes(organizationId)) {
              _context.next = 8;
              break;
            }
            throw new Error("no-org-found");
          case 8:
            _context.next = 10;
            return (0, _getGroupDetails.getGroupDetails)(groupId, organizationId);
          case 10:
            group = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              success: true,
              group: group
            }));
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0.message);
            if (!(_context.t0.message === "no-org-found")) {
              _context.next = 19;
              break;
            }
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "You are not part of that group"
            }));
          case 19:
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "Server error"
            }));
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 14]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};