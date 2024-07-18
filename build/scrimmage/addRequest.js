"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addRequest = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _groups = require("../groups");
var addRequest = exports.addRequest = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var contact, note, scrimmageId, organizationId, skillLevel, requestedBy, name, organizationInfo, reqObject, newScrimmage;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          contact = _ref.contact, note = _ref.note, scrimmageId = _ref.scrimmageId, organizationId = _ref.organizationId, skillLevel = _ref.skillLevel, requestedBy = _ref.requestedBy, name = _ref.name;
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
          reqObject = {
            organizationId: organizationInfo._id,
            organization_name: organizationInfo.name,
            organization_logo: organizationInfo.image_url,
            coachId: requestedBy,
            coach_name: name,
            coach_contact: contact,
            note: note,
            skill_level: skillLevel
          };
          _context.next = 9;
          return _models.Scrimmage.findByIdAndUpdate(scrimmageId, {
            $push: {
              requests: reqObject
            }
          }, {
            "new": true
          });
        case 9:
          newScrimmage = _context.sent;
          return _context.abrupt("return", newScrimmage._id);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addRequest(_x) {
    return _ref2.apply(this, arguments);
  };
}();