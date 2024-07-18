"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var testRoute = exports.testRoute = {
  path: "/teams/test/img/",
  method: "get",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var url, fileName;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            try {
              url = req.body.url;
              fileName = decodeURIComponent(url.split("/").pop().split("?")[0]);
              console.log();
              res.status(200).json({
                success: true,
                fileName: fileName
              });
            } catch (error) {
              console.log(error);
              res.status(500).json({
                error: "Srrver Error"
              });
            }
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};