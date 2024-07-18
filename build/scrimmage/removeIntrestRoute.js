"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeIntrestRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _removeRequest = require("./removeRequest");
var removeIntrestRoute = exports.removeIntrestRoute = {
  path: "/scrimmage/:scrimmageId/:organizationId/interested/",
  method: "delete",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, user, _req$params, scrimmageId, organizationId;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authUser = req.user;
            _context.prev = 1;
            _context.next = 4;
            return (0, _users.getUserByAuthId)(authUser.user_id);
          case 4:
            user = _context.sent;
            // ----
            // Check permission
            // ----
            _req$params = req.params, scrimmageId = _req$params.scrimmageId, organizationId = _req$params.organizationId;
            _context.next = 8;
            return (0, _removeRequest.removeRequest)({
              scrimmageId: scrimmageId,
              organizationId: organizationId
            });
          case 8:
            return _context.abrupt("return", res.status(200).json({
              success: true,
              scrimmage_request_removed: true
            }));
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: _context.t0.message
            }));
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 11]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};