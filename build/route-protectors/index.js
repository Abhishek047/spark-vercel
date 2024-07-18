"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isVerifiedProtector = exports.isOnboardedProtector = exports.isLoggedInProtector = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var admin = _interopRequireWildcard(require("firebase-admin"));
var _permissions = require("../permissions");
var _users = require("../users");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var isLoggedInProtector = exports.isLoggedInProtector = {
  test: function () {
    var _test = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", !!req.user);
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function test(_x) {
      return _test.apply(this, arguments);
    }
    return test;
  }(),
  errorCode: 401,
  errorMessage: "You must be logged in to access these resources"
};
var isVerifiedProtector = exports.isVerifiedProtector = {
  test: function () {
    var _test2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", req.user && req.user.email_verified);
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    function test(_x2) {
      return _test2.apply(this, arguments);
    }
    return test;
  }(),
  errorCode: 403,
  errorMessage: "You must verify your email before you can access these resources"
};
var isOnboardedProtector = exports.isOnboardedProtector = {
  test: function () {
    var _test3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req) {
      var id, user;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (req.user) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return", false);
          case 2:
            id = req.user.user_id;
            _context3.next = 5;
            return (0, _users.getUserByAuthId)(id);
          case 5:
            user = _context3.sent;
            if (user) {
              _context3.next = 8;
              break;
            }
            return _context3.abrupt("return", false);
          case 8:
            return _context3.abrupt("return", user.isOnboarded);
          case 9:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    function test(_x3) {
      return _test3.apply(this, arguments);
    }
    return test;
  }(),
  errorCode: 403,
  errorMessage: "You must complete the onboarding flow"
};

// export const hasPermissionProtector = permissionType => {
//     test: async req => {

//     }
//     errorCode: 403,
//     errorMessage: "User doesn't have the correct permissions to perform this action",
// }