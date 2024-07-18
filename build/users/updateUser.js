"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var updateUser = exports.updateUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userId, params) {
    var query, key, updated;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          query = {};
          for (key in params) {
            //could also be req.query and req.params
            params[key] !== '' ? query[key] = params[key] : null;
          }
          _context.next = 4;
          return _models.Users.findByIdAndUpdate(userId, {
            $set: query
          }, {
            "new": true
          });
        case 4:
          updated = _context.sent;
          _context.next = 7;
          return _models.Groups.updateMany({
            'admins.id': updated._id
          }, {
            $set: {
              'admins.$.name': updated.full_name,
              'admins.$.profile_img': updated.profile_img
            }
          }, {
            "new": true
          });
        case 7:
          _context.next = 9;
          return _models.Groups.updateMany({
            'players.id': updated._id
          }, {
            $set: {
              'players.$.name': updated.full_name,
              'players.$.gamerName': updated.gamer_name,
              'players.$.profile_img': updated.profile_img,
              'players.$.bio': updated.bio
            }
          }, {
            "new": true
          });
        case 9:
          _context.next = 11;
          return _models.Events.updateMany({
            'invitees.id': updated._id
          }, {
            $set: {
              'invitees.$.name': updated.full_name,
              'invitees.$.gamerName': updated.gamer_name,
              'invitees.$.profile_img': updated.profile_img,
              'invitees.$.bio': updated.bio
            }
          }, {
            "new": true
          });
        case 11:
          return _context.abrupt("return", updated);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function updateUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();