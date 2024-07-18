"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTeamImage = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var admin = _interopRequireWildcard(require("firebase-admin"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var bucketName = "gs://spark-esport.appspot.com/";
var deleteTeamImage = exports.deleteTeamImage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(url) {
    var fileName, deletedImage;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // GET THE IMAGE NAME
          fileName = decodeURIComponent(url.split("/").pop().split("?")[0]);
          console.log(fileName);
          if (!(fileName.split("/")[0] === "default")) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", true);
        case 6:
          _context.next = 8;
          return admin.storage().bucket(bucketName).file(fileName)["delete"]();
        case 8:
          deletedImage = _context.sent;
          return _context.abrupt("return", deletedImage);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function deleteTeamImage(_x) {
    return _ref.apply(this, arguments);
  };
}();