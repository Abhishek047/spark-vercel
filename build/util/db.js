"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeDbConnection = exports.connectToDb = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongodb = require("mongodb");
var client = new _mongodb.MongoClient("mongodb+srv://".concat(process.env.MONGO_DB_USERNAME, ":").concat(process.env.MONGO_DB_PASSWORD, "@cluster0.al0a8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"));
var initializeDbConnection = exports.initializeDbConnection = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log("connecting to db...");
          _context.next = 3;
          return client.connect();
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function initializeDbConnection() {
    return _ref.apply(this, arguments);
  };
}();
var connectToDb = exports.connectToDb = function connectToDb(dbName) {
  var db = client.db(dbName);
  return db;
};