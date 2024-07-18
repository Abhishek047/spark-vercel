"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAGroupRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _createCommunityGroup = require("./createCommunityGroup");
var addAGroupRoute = exports.addAGroupRoute = {
  method: "post",
  // fix to take organizationId as param
  path: "/community-group/",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$body, name, state, description, organizationId, authUser, user, groupId;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, state = _req$body.state, description = _req$body.description, organizationId = _req$body.organizationId;
            authUser = req.user;
            _context.prev = 2;
            _context.next = 5;
            return (0, _users.getUserByAuthId)(authUser.user_id);
          case 5:
            user = _context.sent;
            _context.next = 8;
            return (0, _createCommunityGroup.createCommunityGroup)({
              name: name,
              state: state,
              description: description,
              creatorId: user._id,
              organizationId: organizationId
            });
          case 8:
            groupId = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              success: true,
              groupId: groupId
            }));
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0.message);
            if (!(_context.t0.message === "no-org-found")) {
              _context.next = 17;
              break;
            }
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "You do not own a organization"
            }));
          case 17:
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "Server error"
            }));
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 12]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};