"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addRosterRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createRoster = require("./createRoster");
var _getUserById = require("../users/getUserById");
var _models = require("../models");
var addRosterRoute = exports.addRosterRoute = {
  path: "/rosters/add",
  method: "post",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$body, name, teamId, coachId, coach, newRoster;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, teamId = _req$body.teamId, coachId = _req$body.coachId;
            _context.prev = 1;
            _context.next = 4;
            return (0, _getUserById.getUserById)(coachId);
          case 4:
            coach = _context.sent;
            _context.next = 7;
            return (0, _createRoster.createRoster)({
              name: name,
              teamId: teamId,
              coach: coach
            });
          case 7:
            newRoster = _context.sent;
            return _context.abrupt("return", res.status(200).send({
              roster: newRoster
            }));
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            return _context.abrupt("return", res.sendStatus(500));
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