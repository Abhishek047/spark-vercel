"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllTeamsForUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var admin = _interopRequireWildcard(require("firebase-admin"));
var _coaches = require("../coaches");
var _schools = require("../schools");
var _getTeamForGroup = require("./getTeamForGroup");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var removeDuplicatesByProperty = function removeDuplicatesByProperty(property, objects) {
  var differentValues = (0, _toConsumableArray2["default"])(new Set(objects.map(function (obj) {
    return obj[property];
  })));
  return differentValues.map(function (val) {
    return objects.find(function (obj) {
      return obj[property] === val;
    });
  });
};
var getAllTeamsForUser = exports.getAllTeamsForUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userId) {
    var coachMembershipsQuerySnapshot, playerMembershipsQuerySnapshot, coachMemberships, playerMemberships, memberships, groupDocSnapshots, teams, teamsNoDupes, schools, teamsWithSchools;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return admin.firestore().collection("memberships").where("membershipTypeId", "==", "coach").where("userId", "==", userId).limit(20).get();
        case 2:
          coachMembershipsQuerySnapshot = _context.sent;
          _context.next = 5;
          return admin.firestore().collection("memberships").where("membershipTypeId", "==", "player").where("userId", "==", userId).limit(10).get();
        case 5:
          playerMembershipsQuerySnapshot = _context.sent;
          coachMemberships = coachMembershipsQuerySnapshot.docs.map(function (doc) {
            return doc.data();
          });
          playerMemberships = playerMembershipsQuerySnapshot.docs.map(function (doc) {
            return doc.data();
          });
          memberships = [].concat((0, _toConsumableArray2["default"])(coachMemberships), (0, _toConsumableArray2["default"])(playerMemberships));
          _context.next = 11;
          return Promise.all(memberships.map(function (membership) {
            return admin.firestore().collection("groups").doc(membership.groupId).get();
          }));
        case 11:
          groupDocSnapshots = _context.sent;
          _context.next = 14;
          return Promise.all(groupDocSnapshots.map(function (groupDoc) {
            return (0, _getTeamForGroup.getTeamForGroup)(_objectSpread(_objectSpread({}, groupDoc.data()), {}, {
              id: groupDoc.id
            }));
          }));
        case 14:
          teams = _context.sent.filter(function (x) {
            return x;
          });
          teamsNoDupes = removeDuplicatesByProperty("id", teams);
          _context.next = 18;
          return Promise.all(teamsNoDupes.map(function (team) {
            return admin.firestore().collection('schools').doc(team.schoolId).get();
          }));
        case 18:
          schools = _context.sent.map(function (doc) {
            return _objectSpread({
              id: doc.id
            }, doc.data());
          });
          teamsWithSchools = teamsNoDupes.map(function (team, i) {
            return _objectSpread(_objectSpread({}, team), {}, {
              school: schools[i]
            });
          });
          return _context.abrupt("return", teamsWithSchools);
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllTeamsForUser(_x) {
    return _ref.apply(this, arguments);
  };
}();