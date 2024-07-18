"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPlayerIdToGroup = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _permissions = require("../permissions");
var addPlayerIdToGroup = exports.addPlayerIdToGroup = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var groupId, playerId, email, _ref$gamerName, gamerName, _ref$bio, bio, _ref$profile_img, profile_img, _ref$name, name, playerToAdd;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          groupId = _ref.groupId, playerId = _ref.playerId, email = _ref.email, _ref$gamerName = _ref.gamerName, gamerName = _ref$gamerName === void 0 ? "" : _ref$gamerName, _ref$bio = _ref.bio, bio = _ref$bio === void 0 ? "" : _ref$bio, _ref$profile_img = _ref.profile_img, profile_img = _ref$profile_img === void 0 ? "" : _ref$profile_img, _ref$name = _ref.name, name = _ref$name === void 0 ? "" : _ref$name;
          if (playerId) {
            _context.next = 3;
            break;
          }
          throw new Error("no-player-with-this-id-".concat(playerId));
        case 3:
          playerToAdd = {
            id: playerId,
            name: name,
            email: email,
            gamerName: gamerName,
            bio: bio,
            profile_img: profile_img
          };
          _context.next = 6;
          return (0, _permissions.createNewPlayerPermission)({
            userId: playerId,
            groupId: groupId
          });
        case 6:
          _context.next = 8;
          return _models.Groups.findByIdAndUpdate(groupId, {
            $push: {
              players: playerToAdd
            }
          }, {
            "new": true
          });
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addPlayerIdToGroup(_x) {
    return _ref2.apply(this, arguments);
  };
}();