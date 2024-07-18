"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateOrganizationRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _getGroupById = require("./getGroupById");
var _users = require("../users");
var _updateOrganization = require("./updateOrganization");
var updateOrganizationRoute = exports.updateOrganizationRoute = {
  method: 'post',
  path: '/org/:orgId',
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector, _routeProtectors.isOnboardedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var orgId, updates, user, userInfo, organization;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            orgId = req.params.orgId;
            updates = req.body.updates;
            user = req.user;
            _context.next = 5;
            return (0, _users.getUserByAuthId)(user.user_id);
          case 5:
            userInfo = _context.sent;
            _context.next = 8;
            return (0, _getGroupById.getGroupById)(orgId);
          case 8:
            organization = _context.sent;
            if (!(JSON.stringify(userInfo._id) === JSON.stringify(organization.created_by))) {
              _context.next = 22;
              break;
            }
            _context.prev = 10;
            _context.next = 13;
            return (0, _updateOrganization.updateOrganization)({
              orgId: orgId,
              updates: updates
            });
          case 13:
            res.status(200).send({
              success: true,
              message: 'Organization Updated'
            });
            _context.next = 20;
            break;
          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](10);
            console.log(_context.t0);
            res.status(500).send({
              success: false,
              error: e
            });
          case 20:
            _context.next = 23;
            break;
          case 22:
            res.status(403).json({
              message: 'Coaches can only make changes to the Organization!'
            });
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[10, 16]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};