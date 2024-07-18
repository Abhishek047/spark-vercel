"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTournament = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _getGroupById = require("./getGroupById");
var _models = require("../models");
var createTournament = exports.createTournament = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var tournamentName, gameName, img, groupId, userId, communityGroup, ifExist, newTournament;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          tournamentName = _ref.tournamentName, gameName = _ref.gameName, img = _ref.img, groupId = _ref.groupId, userId = _ref.userId;
          if (!(!tournamentName || !gameName)) {
            _context.next = 3;
            break;
          }
          throw new Error("no-required-fields");
        case 3:
          _context.next = 5;
          return (0, _getGroupById.getGroupById)(groupId);
        case 5:
          communityGroup = _context.sent;
          if (communityGroup) {
            _context.next = 8;
            break;
          }
          throw new Error("no-group-found");
        case 8:
          _context.next = 10;
          return _models.Tournament.findOne({
            name: tournamentName,
            community_group: groupId
          });
        case 10:
          ifExist = _context.sent;
          if (!ifExist) {
            _context.next = 13;
            break;
          }
          throw new Error("already-exist");
        case 13:
          _context.next = 15;
          return new _models.Tournament({
            name: tournamentName,
            game: gameName,
            created_by_user: userId,
            community_group: groupId,
            image_url: img
          }).save();
        case 15:
          newTournament = _context.sent;
          console.log("created-tournament");
          return _context.abrupt("return", newTournament._id);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createTournament(_x) {
    return _ref2.apply(this, arguments);
  };
}();