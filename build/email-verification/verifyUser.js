"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyUser = exports.USER_NOT_FOUND = exports.EMAIL_ALREADY_VERIFIED = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var admin = _interopRequireWildcard(require("firebase-admin"));
var _models = require("../models");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// import * as admin from 'firebase-admin';

// export const USER_NOT_FOUND = 'No user found with this confirmation code';
// export const EMAIL_ALREADY_VERIFIED = 'Email is already verified';

// export const verifyUser = async confirmationCode => {
//     const auth = admin.auth();
//     const users = admin.firestore().collection('users');
//     const querySnapshot = await users.where('confirmationCode', '==', confirmationCode).get();

//     if (querySnapshot.empty) {
//         throw new Error(USER_NOT_FOUND);
//     }

//     const userDoc = querySnapshot.docs[0];
//     const user = userDoc.data();

//     if (user.isConfirmed) {
//         throw new Error(EMAIL_ALREADY_VERIFIED);
//     }

//     await auth.updateUser(user.authId, { emailVerified: true });
//     await users.doc(userDoc.id).update({ isConfirmed: true });

//     return user;
// }
// MONGO_DB MIGTATION

var USER_NOT_FOUND = exports.USER_NOT_FOUND = "No user found with this confirmation code";
var EMAIL_ALREADY_VERIFIED = exports.EMAIL_ALREADY_VERIFIED = "Email is already verified";
var verifyUser = exports.verifyUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(confirmationCode) {
    var auth, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          auth = admin.auth();
          _context.next = 3;
          return _models.Users.findOne({
            confirmationCode: confirmationCode
          });
        case 3:
          user = _context.sent;
          if (user) {
            _context.next = 6;
            break;
          }
          throw new Error(USER_NOT_FOUND);
        case 6:
          if (!user.isConfirmed) {
            _context.next = 8;
            break;
          }
          throw new Error(EMAIL_ALREADY_VERIFIED);
        case 8:
          _context.next = 10;
          return auth.updateUser(user.auth_id, {
            emailVerified: true
          });
        case 10:
          _context.next = 12;
          return user.updateOne({
            isConfirmed: true
          });
        case 12:
          _context.next = 14;
          return user.save();
        case 14:
          return _context.abrupt("return", user);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function verifyUser(_x) {
    return _ref.apply(this, arguments);
  };
}();