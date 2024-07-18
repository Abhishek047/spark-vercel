"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupsFor = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var admin = _interopRequireWildcard(require("firebase-admin"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/*
    This function will return all the groups that
    a given user or group is a member of - only
    one level up, though.
*/
var getGroupsFor = exports.getGroupsFor = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(memberId) {
    var membershipsSnapshot, memberships, groupIds, groups;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return admin.firestore().collection("memberships").where("memberId", "==", memberId).get();
        case 2:
          membershipsSnapshot = _context.sent;
          memberships = membershipsSnapshot.docs.map(function (doc) {
            return doc.data();
          }); // Now that we have the memberships, we need to get the groupId
          // from each membership
          groupIds = memberships.map(function (membership) {
            return membership.groupId;
          }); // Load the corresponding group for each groupId
          _context.next = 7;
          return Promise.all(groupIds.map(function (id) {
            return admin.firestore().collection("groups").doc(id).get();
          }));
        case 7:
          groups = _context.sent;
          return _context.abrupt("return", groups);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getGroupsFor(_x) {
    return _ref.apply(this, arguments);
  };
}();