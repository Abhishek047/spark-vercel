"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editTeamRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _updateTeam = require("./updateTeam");
var editTeamRoute = exports.editTeamRoute = {
  path: "/team/:id/update",
  method: "put",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var teamId, updateValues;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            teamId = req.params.id;
            updateValues = req.body;
            _context.prev = 2;
            _context.next = 5;
            return (0, _updateTeam.updateTeam)({
              teamId: teamId,
              updateValues: updateValues
            });
          case 5:
            res.status(200).send({
              success: true,
              message: "Values Changed"
            });
            _context.next = 12;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            res.status(500).send({
              success: false,
              error: _context.t0
            });
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 8]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};