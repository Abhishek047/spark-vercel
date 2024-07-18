"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTournament = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var updateTournament = exports.updateTournament = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var params, tournamentId, userId, ifTournament, query, key, tournament;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          params = _ref.params, tournamentId = _ref.tournamentId, userId = _ref.userId;
          if (tournamentId) {
            _context.next = 3;
            break;
          }
          throw new Error("no-tournamentId");
        case 3:
          _context.next = 5;
          return _models.Tournament.findOne({
            _id: tournamentId,
            created_by_user: userId
          });
        case 5:
          ifTournament = _context.sent;
          if (ifTournament) {
            _context.next = 8;
            break;
          }
          throw new Error("no-tournament-for-user-top-update");
        case 8:
          query = {};
          for (key in params) {
            //could also be req.query and req.params
            params[key] !== "" ? query[key] = params[key] : null;
          }
          if (Object.keys(query).length) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", tournamentId);
        case 12:
          _context.next = 14;
          return _models.Tournament.findByIdAndUpdate(tournamentId, {
            $set: query
          }, {
            "new": true
          });
        case 14:
          tournament = _context.sent;
          console.log("Tournament-updated");
          return _context.abrupt("return", tournament._id);
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function updateTournament(_x) {
    return _ref2.apply(this, arguments);
  };
}();