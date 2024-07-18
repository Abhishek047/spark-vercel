"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.protectRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var admin = _interopRequireWildcard(require("firebase-admin"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var protectRoute = exports.protectRoute = function protectRoute() {
  var routeProtectors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
      var failingProtectors, _failingProtectors$, errorCode, errorMessage;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all(routeProtectors.map(function (protector) {
              if (!protector.test(req)) {
                return protector;
              }
              return null;
            }));
          case 2:
            failingProtectors = _context.sent.filter(function (x) {
              return x;
            });
            if (!(failingProtectors.length === 0)) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return", next());
          case 5:
            _failingProtectors$ = failingProtectors[0], errorCode = _failingProtectors$.errorCode, errorMessage = _failingProtectors$.errorMessage;
            return _context.abrupt("return", res.status(errorCode).json({
              message: errorMessage
            }));
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};