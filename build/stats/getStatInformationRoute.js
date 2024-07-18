"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatInformationRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _getStatFormById = require("./getStatFormById");
var _createRecordsForPlayer = require("./createRecordsForPlayer");
var getStatInformationRoute = exports.getStatInformationRoute = {
  path: "/:id/stats-form/",
  method: "get",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var formId, statInfo, records;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // const { id: formId } = req.params;
            formId = "60e2c6f5c9d39821842007d2";
            _context.next = 4;
            return (0, _getStatFormById.getStatFormById)(formId);
          case 4:
            statInfo = _context.sent;
            records = (0, _createRecordsForPlayer.createRecordsForPlayer)(statInfo.fields);
            return _context.abrupt("return", res.status(200).json({
              success: true,
              statInfo: statInfo,
              records: records
            }));
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: _context.t0.message
            }));
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 9]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};