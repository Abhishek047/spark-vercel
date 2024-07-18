"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewedRequest = exports.declineRequest = exports.acceptRequest = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var declineRequest = exports.declineRequest = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(requestId) {
    var declined;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models.Scrimmage.updateOne({
            "requests._id": requestId
          }, {
            "requests.$.declined": true,
            "requests.$.accepted": false
          });
        case 2:
          declined = _context.sent;
          return _context.abrupt("return", declined ? true : false);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function declineRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();
var acceptRequest = exports.acceptRequest = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(requestId) {
    var accepted;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _models.Scrimmage.updateOne({
            "requests._id": requestId
          }, {
            "requests.$.declined": false,
            "requests.$.accepted": true
          });
        case 2:
          accepted = _context2.sent;
          return _context2.abrupt("return", accepted ? true : false);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function acceptRequest(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var viewedRequest = exports.viewedRequest = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(requestId) {
    var viewed;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _models.Scrimmage.updateOne({
            "requests._id": requestId
          }, {
            "requests.$.viewed": true
          });
        case 2:
          viewed = _context3.sent;
          return _context3.abrupt("return", viewed ? true : false);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function viewedRequest(_x3) {
    return _ref3.apply(this, arguments);
  };
}();