"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupsRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _getGroupsWithOrganizationId = require("./getGroupsWithOrganizationId");
var getGroupsRoute = exports.getGroupsRoute = {
  method: "get",
  path: "/:organizationId/community-group/",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var organizationId, groups;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            organizationId = req.params.organizationId;
            _context.next = 4;
            return (0, _getGroupsWithOrganizationId.getGroupsWithOrganizationId)(organizationId);
          case 4:
            groups = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              success: true,
              groups: groups
            }));
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);
            if (!(_context.t0.message === "no-org-found")) {
              _context.next = 13;
              break;
            }
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "You do not own a organization"
            }));
          case 13:
            return _context.abrupt("return", res.status(403).json({
              success: false,
              message: "Server error"
            }));
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};