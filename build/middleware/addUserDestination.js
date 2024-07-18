"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDestination = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var addDestination = exports.addDestination = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var oldDestination, oldEmail, destination, email;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          try {
            oldDestination = req.cookies["savedDest"];
            oldEmail = req.cookies["savedEmail"];
            req.email = oldEmail;
            req.dest = oldDestination;
            // saving to new values
            destination = req.query.dest;
            email = req.query.email;
            res.cookie("savedEmail", email, {
              maxAge: 60 * 60 * 5,
              httpOnly: true
            });
            res.cookie("savedDest", destination, {
              maxAge: 60 * 60 * 5,
              httpOnly: true
            });
            next();
          } catch (e) {
            console.log(e.message);
            next();
          }
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addDestination(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();