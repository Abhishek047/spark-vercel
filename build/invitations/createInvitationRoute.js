"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInvitationRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _uuid = require("uuid");
var _permissions = require("../permissions");
var createInvitationRoute = exports.createInvitationRoute = {
  path: '/invitations',
  method: 'post',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$body, email, groupId, membershipTypeId, canCreate, confirmationCode, baseUrl, user, userId, newInvitation;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, groupId = _req$body.groupId, membershipTypeId = _req$body.membershipTypeId;
            _context.next = 3;
            return (0, _permissions.hasPermission)({
              userId: userId,
              groupId: groupId,
              membershipType: _permissions.ADMIN
            });
          case 3:
            canCreate = _context.sent;
            if (canCreate) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return", res.sendStatus(403));
          case 6:
            confirmationCode = (0, _uuid.v4)();
            baseUrl = req.app.get('baseBackEndUrl');
            _context.next = 10;
            return getUserByEmail(email);
          case 10:
            user = _context.sent;
            userId = user.id;
            newInvitation = {
              userId: userId,
              groupId: groupId,
              membershipTypeId: membershipTypeId,
              invitedById: invitedById,
              confirmationCode: confirmationCode,
              baseUrl: baseUrl,
              data: {}
            };
            _context.prev = 13;
            _context.next = 16;
            return createInvitation(newInvitation);
          case 16:
            _context.next = 18;
            return sendInvitationEmail(newInvitation);
          case 18:
            _context.next = 23;
            break;
          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](13);
            res.status(500).json('Help!!');
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[13, 20]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};