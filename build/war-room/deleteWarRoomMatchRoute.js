"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteWarRoomMatchRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _users = require("../users");
var _deleteWarRoomMatch = require("./deleteWarRoomMatch");
var deleteWarRoomMatchRoute = exports.deleteWarRoomMatchRoute = {
  method: "post",
  path: "/war-room/delete/:warRoomId",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var warRoomId, dataId, user, playerFromGoal, updatedGoal;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // delete war-room route to be configured
            warRoomId = req.params.warRoomId;
            dataId = req.body.dataId;
            user = req.user;
            _context.next = 5;
            return (0, _users.getPlayerByGoalId)(goalId);
          case 5:
            playerFromGoal = _context.sent;
            if (!(user.user_id === playerFromGoal.auth_id)) {
              _context.next = 13;
              break;
            }
            _context.next = 9;
            return deleteGoalData(goalId, dataId);
          case 9:
            updatedGoal = _context.sent;
            res.send(updatedGoal);
            _context.next = 14;
            break;
          case 13:
            res.status(403).json({
              message: "User can only delete their own Goal data"
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