"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addonTrailField = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _getGroupsWithOrganizationId = require("../community-groups/getGroupsWithOrganizationId");
var _models = require("../models");
var addonTrailField = exports.addonTrailField = {
  path: "/test-trial",
  method: "post",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var organizationId, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            organizationId = "61740a7d7649f7a9baa4d959";
            _context.next = 4;
            return (0, _getGroupsWithOrganizationId.getGroupsWithOrganizationId)(organizationId);
          case 4:
            data = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              msg: "trail for groups added",
              data: data
            }));
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(500).json({
              msg: "SERVER ERROR"
            }));
          case 12:
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