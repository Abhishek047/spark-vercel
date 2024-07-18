"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTeam = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _deleteTeamImage = require("./deleteTeamImage");
var _permissions = require("../permissions");
var deleteTeam = exports.deleteTeam = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(teamId, userId) {
    var authrizedToDelete;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // do we want to make a check if the team is delted by the creator
          console.log("delete ID:" + teamId);
          _context.next = 3;
          return _models.Groups.findOne({
            _id: teamId,
            created_by: userId
          });
        case 3:
          authrizedToDelete = _context.sent;
          if (authrizedToDelete) {
            _context.next = 6;
            break;
          }
          throw new Error("not-authorized-to-delete");
        case 6:
          if (!authrizedToDelete.image_url) {
            _context.next = 9;
            break;
          }
          _context.next = 9;
          return (0, _deleteTeamImage.deleteTeamImage)(authrizedToDelete.image_url);
        case 9:
          _context.next = 11;
          return _models.Groups.deleteMany({
            parent_groups: teamId
          });
        case 11:
          _context.next = 13;
          return (0, _permissions.removeAllPermissionsOfGroup)({
            groupId: teamId
          });
        case 13:
          return _context.abrupt("return", true);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function deleteTeam(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();