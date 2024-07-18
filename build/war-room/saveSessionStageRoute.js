"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveSessionStageRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _updateWarRoomInfo = require("./updateWarRoomInfo");
var saveSessionStageRoute = exports.saveSessionStageRoute = {
  path: '/:matchId/save/match',
  method: 'post',
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, matchId, updateQuery, key, user;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authUser = req.user;
            matchId = req.params.matchId;
            updateQuery = {};
            for (key in req.body) {
              //could also be req.query
              req.body[key] !== '' ? updateQuery[key] = req.body[key] : null;
            }
            _context.prev = 4;
            _context.next = 7;
            return (0, _users.getUserByAuthId)(authUser.user_id);
          case 7:
            user = _context.sent;
            if (user) {
              _context.next = 10;
              break;
            }
            return _context.abrupt("return", res.status(404).json({
              message: 'no-user-found'
            }));
          case 10:
            _context.next = 12;
            return (0, _updateWarRoomInfo.updateWarRoomInfo)({
              matchId: matchId,
              updateValues: updateQuery
            });
          case 12:
            console.log('war-room-updated');
            return _context.abrupt("return", res.status(200).json({
              success: true
            }));
          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](4);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: _context.t0.message
            }));
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 16]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};