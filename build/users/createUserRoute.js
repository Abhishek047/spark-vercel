"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _uuid = require("uuid");
var _emailVerification = require("../email-verification");
var _invitations = require("../invitations");
var _addAuthIdToUser = require("./addAuthIdToUser");
var _createUserInAuth = require("./createUserInAuth");
var _createUserInDB = require("./createUserInDB");
var _getAuthUserExists = require("./getAuthUserExists");
var _getUserByEmail = require("./getUserByEmail");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
    This route is used to create new accounts, and is
    used by the CreateAccountPage when a new user signs up
*/
var createUserRoute = exports.createUserRoute = {
  method: "post",
  path: "/users",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$body, email, membershipTypeId, password, baseVerificationUrl, userAlreadyExists, authId, user, emailAlreadyConfirmed, confirmationObject;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, membershipTypeId = _req$body.membershipTypeId, password = _req$body.password;
            baseVerificationUrl = req.app.get("baseBackEndUrl");
            _context.prev = 2;
            _context.next = 5;
            return (0, _getAuthUserExists.getAuthUserExists)(email);
          case 5:
            userAlreadyExists = _context.sent;
            if (!userAlreadyExists) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return", res.status(409).json({
              message: "It looks like there's already an account with that email, please log in"
            }));
          case 8:
            _context.next = 10;
            return (0, _createUserInAuth.createUserInAuth)(email, password);
          case 10:
            authId = _context.sent;
            _context.next = 13;
            return (0, _getUserByEmail.getUserByEmail)(email);
          case 13:
            user = _context.sent;
            _context.next = 16;
            return (0, _invitations.getAcceptedInvitationsByEmail)(email);
          case 16:
            emailAlreadyConfirmed = _context.sent;
            // 5. Generate a confirmation code for the user to confirm their email (only if step 4 is false).
            confirmationObject = emailAlreadyConfirmed ? {
              isConfirmed: true
            } : {
              confirmationCode: (0, _uuid.v4)()
            }; // 6. Check and see if there's already a user in the DB (not firebase auth) with that email
            // (i.e. this happens when the user is invited to a team or something, and will usually be true)
            if (!user) {
              _context.next = 23;
              break;
            }
            _context.next = 21;
            return (0, _addAuthIdToUser.addAuthIdToUser)(_objectSpread({
              userId: user._id,
              authId: authId,
              membershipTypeId: membershipTypeId
            }, confirmationObject));
          case 21:
            _context.next = 25;
            break;
          case 23:
            _context.next = 25;
            return (0, _createUserInDB.createUserInDB)(_objectSpread({
              auth_id: authId,
              email: email,
              membershipTypeId: membershipTypeId
            }, confirmationObject));
          case 25:
            if (emailAlreadyConfirmed) {
              _context.next = 28;
              break;
            }
            _context.next = 28;
            return (0, _emailVerification.sendVerificationEmail)(_objectSpread(_objectSpread({
              email: email
            }, confirmationObject), {}, {
              baseVerificationUrl: baseVerificationUrl
            }));
          case 28:
            res.status(200).json(_objectSpread({
              id: authId
            }, confirmationObject));
            _context.next = 35;
            break;
          case 31:
            _context.prev = 31;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            res.status(500).json({
              message: "Uh oh! Something went wrong..."
            });
          case 35:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 31]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};