"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrganizationRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createOrganization = require("../groups/createOrganization");
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var createOrganizationRoute = exports.createOrganizationRoute = {
  path: "/organization",
  method: "post",
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector, _routeProtectors.isOnboardedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$body, orgName, orgType, city, state, zipCode, image_url, userId, user, groupId, newUser;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, orgName = _req$body.orgName, orgType = _req$body.orgType, city = _req$body.city, state = _req$body.state, zipCode = _req$body.zipCode, image_url = _req$body.image_url;
            userId = req.user.user_id;
            _context.prev = 2;
            if (!(orgName === "" || orgType === "")) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return", res.status(401).json({
              message: "fileds-not-filled"
            }));
          case 5:
            _context.next = 7;
            return (0, _users.getUserByAuthId)(userId);
          case 7:
            user = _context.sent;
            if (user) {
              _context.next = 10;
              break;
            }
            return _context.abrupt("return", res.status(404).json({
              message: "no-user-found"
            }));
          case 10:
            _context.next = 12;
            return (0, _createOrganization.createOrganization)({
              name: orgName,
              orgType: orgType,
              city: city,
              state: state,
              zipCode: zipCode,
              creatorId: user._id,
              image_url: image_url
            });
          case 12:
            groupId = _context.sent;
            _context.next = 15;
            return user.updateOne({
              $push: {
                organizations: groupId
              }
            }, {
              "new": true
            });
          case 15:
            newUser = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              success: true,
              groupId: groupId,
              user: user
            }));
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(500).json({
              message: _context.t0.message
            }));
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 19]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};