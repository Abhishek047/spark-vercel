"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createScrimmage = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _groups = require("../groups");
var _models = require("../models");
var createScrimmage = exports.createScrimmage = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var game, date, organizationId, teams, skillLevel, createdBy, organizationInfo, coaches, newScrimmageObject, newScrimmage;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          game = _ref.game, date = _ref.date, organizationId = _ref.organizationId, teams = _ref.teams, skillLevel = _ref.skillLevel, createdBy = _ref.createdBy;
          _context.next = 3;
          return (0, _groups.getGroupById)(organizationId);
        case 3:
          organizationInfo = _context.sent;
          if (organizationInfo) {
            _context.next = 6;
            break;
          }
          throw new Error("no-organization-found");
        case 6:
          coaches = organizationInfo.admins.map(function (admin) {
            return {
              id: admin.id,
              name: admin.name
            };
          });
          newScrimmageObject = {
            organizationId: organizationInfo._id,
            organization_name: organizationInfo.name,
            organization_logo: organizationInfo.image_url,
            organization_location: organizationInfo.location,
            game: game,
            teams: teams,
            date: new Date(date),
            skill_level: skillLevel,
            created_by: createdBy,
            coaches: coaches
          };
          newScrimmage = new _models.Scrimmage(newScrimmageObject);
          _context.next = 11;
          return newScrimmage.save();
        case 11:
          return _context.abrupt("return", newScrimmage._id);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createScrimmage(_x) {
    return _ref2.apply(this, arguments);
  };
}();