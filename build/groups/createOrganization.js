"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrganization = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _uuid = require("uuid");
var _permissions = require("../permissions");
var _addGroupTrialDate = require("./addGroupTrialDate");
// MONGODB MINGRATION

var createOrganization = exports.createOrganization = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var name, orgType, city, state, zipCode, creatorId, image_url, userDetails, findIfGroupExist, organization_code, admin, newOrganization, parent_groups;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          name = _ref.name, orgType = _ref.orgType, city = _ref.city, state = _ref.state, zipCode = _ref.zipCode, creatorId = _ref.creatorId, image_url = _ref.image_url;
          _context.next = 3;
          return _models.Users.findById(creatorId);
        case 3:
          userDetails = _context.sent;
          _context.next = 6;
          return _models.Groups.findOne({
            name: name,
            group_type: _models.ORGANIZATION
          });
        case 6:
          findIfGroupExist = _context.sent;
          if (userDetails) {
            _context.next = 9;
            break;
          }
          throw new Error("no-user-found");
        case 9:
          if (!findIfGroupExist) {
            _context.next = 11;
            break;
          }
          throw new Error("organization-already-exist");
        case 11:
          organization_code = (0, _uuid.v4)().split("-")[0].toUpperCase();
          admin = [{
            id: creatorId,
            name: userDetails.full_name,
            email: userDetails.email,
            profile_img: userDetails.profile_img,
            admin_type: "ADMIN"
          }];
          newOrganization = new _models.Groups({
            name: name,
            orgType: orgType,
            city: city,
            state: state,
            zipCode: zipCode,
            image_url: image_url,
            group_type: _models.ORGANIZATION,
            created_by: creatorId,
            organization_code: organization_code,
            admins: admin
          });
          parent_groups = [newOrganization._id];
          _context.next = 17;
          return newOrganization.save();
        case 17:
          (0, _addGroupTrialDate.addGroupTrialDate)(newOrganization._id);
          _context.next = 20;
          return newOrganization.updateOne({
            $set: {
              parent_groups: parent_groups
            }
          });
        case 20:
          _context.next = 22;
          return (0, _permissions.createAdminPermissionForGroup)({
            userId: creatorId,
            groupId: newOrganization._id
          });
        case 22:
          return _context.abrupt("return", newOrganization._id);
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createOrganization(_x) {
    return _ref2.apply(this, arguments);
  };
}();