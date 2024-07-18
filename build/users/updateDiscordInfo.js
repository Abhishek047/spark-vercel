"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDiscordInfo = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var updateDiscordInfo = exports.updateDiscordInfo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var discordId, username, discriminator, userId, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          discordId = _ref.discordId, username = _ref.username, discriminator = _ref.discriminator, userId = _ref.userId;
          if (userId) {
            _context.next = 3;
            break;
          }
          throw new Error("no-user-id");
        case 3:
          _context.next = 5;
          return _models.Users.findByIdAndUpdate(userId, {
            $set: {
              "discord.linked": discordId ? true : false,
              "discord.username": username,
              "discord.discriminator": discriminator,
              "discord.id": discordId
            }
          }, {
            "new": true
          });
        case 5:
          user = _context.sent;
          console.log("Updated discord info");
          return _context.abrupt("return", user);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function updateDiscordInfo(_x) {
    return _ref2.apply(this, arguments);
  };
}();