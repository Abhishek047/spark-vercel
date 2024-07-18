"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEventsForMonth = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
// import * as admin from 'firebase-admin';

// export const getEventsForMonth = async ({ userEmail, month, year }) => {
//     const queryResult = await admin.firestore().collection('events')
//         .where('invitees', 'array-contains', userEmail)
//         .where('month', '==', month)
//         .where('year', '==', year)
//         .get();

//     return queryResult.docs.map(doc => ({
//         ...doc.data(),
//         date: doc.data().date.toDate(),
//         id: doc.id,
//     }));
// }

var getEventsForMonth = exports.getEventsForMonth = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var userEmail, month, year, events;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          userEmail = _ref.userEmail, month = _ref.month, year = _ref.year;
          _context.next = 3;
          return _models.Events.find({
            invitees: {
              $elemMatch: {
                email: userEmail
              }
            },
            month: month,
            year: year
          });
        case 3:
          events = _context.sent;
          return _context.abrupt("return", events);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getEventsForMonth(_x) {
    return _ref2.apply(this, arguments);
  };
}();