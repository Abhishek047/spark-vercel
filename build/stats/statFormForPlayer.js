"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statFormForPlayer = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var statFormForPlayer = exports.statFormForPlayer = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var playerId, statFormId, groupReportId, form, player, records;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          playerId = _ref.playerId, statFormId = _ref.statFormId, groupReportId = _ref.groupReportId;
          _context.next = 3;
          return _models.StatsInformation.findById(statFormId);
        case 3:
          form = _context.sent;
          _context.next = 6;
          return _models.Users.findById(playerId);
        case 6:
          player = _context.sent;
          if (form) {
            _context.next = 9;
            break;
          }
          throw new Error("no-form-exist");
        case 9:
          if (player) {
            _context.next = 11;
            break;
          }
          throw new Error("no-player-exist");
        case 11:
          records = createRecordsForPlayer(form.fields); // const newPlayerStat = new StatsEntry({
          //     playerId,
          //     statsId: statFormId,
          //     group_report_id: groupReportId,
          // });
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function statFormForPlayer(_x) {
    return _ref2.apply(this, arguments);
  };
}();