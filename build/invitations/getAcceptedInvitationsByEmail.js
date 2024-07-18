"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAcceptedInvitationsByEmail = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
// import * as admin from 'firebase-admin';

// export const getAcceptedInvitationsByEmail = async email => {
//     const querySnapshot = await admin.firestore()
//         .collection('invitations')
//         .where('email', '==', email)
//         .where('isAccepted', '==', true)
//         .get();
//     return querySnapshot.docs.map(doc => doc.data());
// }

var getAcceptedInvitationsByEmail = exports.getAcceptedInvitationsByEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(email) {
    var acceptedInvitations;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.Invitation.find({
            email: email,
            isConfirmed: true
          });
        case 2:
          acceptedInvitations = _context.sent;
          return _context.abrupt("return", acceptedInvitations.length > 0);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAcceptedInvitationsByEmail(_x) {
    return _ref.apply(this, arguments);
  };
}();