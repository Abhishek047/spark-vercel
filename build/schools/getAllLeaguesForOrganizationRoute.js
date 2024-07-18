"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllLeaguesForOrganizationRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _getLeaguesForOrganization = require("./getLeaguesForOrganization");
var getAllLeaguesForOrganizationRoute = exports.getAllLeaguesForOrganizationRoute = {
  path: "/:groupId/league",
  method: "get",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var groupId, leagues;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            groupId = req.params.groupId;
            _context.prev = 1;
            _context.next = 4;
            return (0, _getLeaguesForOrganization.getLeaguesForOrganizations)(groupId);
          case 4:
            leagues = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              leagues: leagues
            }));
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: _context.t0.message
            }));
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};