"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTeamsForUserByPosition = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var admin = _interopRequireWildcard(require("firebase-admin"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var getTeamForGroup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(group) {
    var groupMembershipsQuerySnapshot, membershipRef, membership, parentGroupSnapshot, parentGroup;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(group.groupType === 'team')) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", group);
        case 2:
          _context.next = 4;
          return admin.firestore().collection('memberships').where('userId', '==', group.id).get();
        case 4:
          groupMembershipsQuerySnapshot = _context.sent;
          membershipRef = groupMembershipsQuerySnapshot.docs[0];
          if (membershipRef) {
            _context.next = 8;
            break;
          }
          return _context.abrupt("return", null);
        case 8:
          membership = membershipRef.data();
          _context.next = 11;
          return admin.firestore().collection('groups').doc(membership.groupId).get();
        case 11:
          parentGroupSnapshot = _context.sent;
          parentGroup = _objectSpread(_objectSpread({}, parentGroupSnapshot.data()), {}, {
            id: parentGroupSnapshot.id
          });
          _context.next = 15;
          return getTeamForGroup(parentGroup);
        case 15:
          return _context.abrupt("return", _context.sent);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getTeamForGroup(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getTeamsForUserByPosition = exports.getTeamsForUserByPosition = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId, membershipTypeId) {
    var userMembershipsSnapshot, userGroupDocs, userTeams;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return admin.firestore().collection('memberships').where('userId', '==', userId).where('membershipTypeId', '==', membershipTypeId).get();
        case 2:
          userMembershipsSnapshot = _context2.sent;
          _context2.next = 5;
          return Promise.all(userMembershipsSnapshot.docs.map(function (membershipDoc) {
            return admin.firestore().collection('groups').doc(membershipDoc.data().groupId).get();
          }));
        case 5:
          userGroupDocs = _context2.sent;
          _context2.next = 8;
          return Promise.all(userGroupDocs.map(function (groupDoc) {
            return getTeamForGroup(_objectSpread(_objectSpread({}, groupDoc.data()), {}, {
              id: groupDoc.id
            }));
          }));
        case 8:
          userTeams = _context2.sent;
          return _context2.abrupt("return", userTeams);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getTeamsForUserByPosition(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();