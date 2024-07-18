"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addStatsInformation = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _fieldsValidation = require("./fieldsValidation");
var addStatsInformation = exports.addStatsInformation = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var name, game, teamId, createdBy, _ref$forTeam, forTeam, userAllowedId, interval, time, _ref$players, players, _ref$fields, fields, newStatsInfo;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          name = _ref.name, game = _ref.game, teamId = _ref.teamId, createdBy = _ref.createdBy, _ref$forTeam = _ref.forTeam, forTeam = _ref$forTeam === void 0 ? false : _ref$forTeam, userAllowedId = _ref.userAllowedId, interval = _ref.interval, time = _ref.time, _ref$players = _ref.players, players = _ref$players === void 0 ? [] : _ref$players, _ref$fields = _ref.fields, fields = _ref$fields === void 0 ? [] : _ref$fields;
          if (!(forTeam && !userAllowedId)) {
            _context.next = 3;
            break;
          }
          throw new Error("no-allowed-user");
        case 3:
          if (!(players.length === 0)) {
            _context.next = 5;
            break;
          }
          throw new Error("no-players");
        case 5:
          if (!(fields.length > 0)) {
            _context.next = 10;
            break;
          }
          if ((0, _fieldsValidation.fieldsValidation)(fields)) {
            _context.next = 8;
            break;
          }
          throw new Error("invalid-fields");
        case 8:
          _context.next = 11;
          break;
        case 10:
          throw new Error("no-fields-to-track");
        case 11:
          newStatsInfo = new _models.StatsInformation({
            name: name,
            teamId: teamId,
            game: game,
            is_stat: true,
            is_goal: false,
            created_by: createdBy,
            for_team: forTeam,
            user_allowed: userAllowedId,
            interval: interval,
            time: time,
            players: players,
            fields: fields
          });
          _context.next = 14;
          return newStatsInfo.save();
        case 14:
          return _context.abrupt("return", newStatsInfo._id);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addStatsInformation(_x) {
    return _ref2.apply(this, arguments);
  };
}();