"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
require("regenerator-runtime/runtime.js");
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var firebaseAdmin = _interopRequireWildcard(require("firebase-admin"));
var _middleware = require("./middleware");
var _routes = require("./routes");
var _passport = _interopRequireDefault(require("passport"));
var _discordStrategy = require("./auth/strategies/discordStrategy");
var _nocache = _interopRequireDefault(require("nocache"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// import { initializeDbConnection } from "./util";

var PORT = process.env.PORT || 8080;
var FIREBASE_CREDENTIALS = process.env.FIREBASE_CREDENTIALS && JSON.parse(process.env.FIREBASE_CREDENTIALS) || require("../../credentials.json");
var BASE_FRONT_END_URL = process.env.IS_PRODUCTION ? "https://sparkesports.gg" : process.env.IS_QA ? "https://dev.sparkesports.gg" : "http://localhost:3000";
var BASE_BACK_END_URL = process.env.IS_PRODUCTION ? "https://sparkesports.gg/api" : process.env.IS_QA ? "https://dev.sparkesports.gg/api" : "http://localhost:8080/api";
if (!FIREBASE_CREDENTIALS) {
  console.log("ERROR: No firebase credentials found");
} else {
  try {
    firebaseAdmin.initializeApp({
      projectId: "spark-esport",
      credential: firebaseAdmin.credential.cert(FIREBASE_CREDENTIALS)
    });
    var store = firebaseAdmin.firestore();
    store.settings({
      ignoreUndefinedProperties: true
    });
    console.log("Firebase connected...");
  } catch (error) {
    console.log("Firebase error...");
    console.log(error);
  }
}
var MONGO_URI = process.env.IS_PRODUCTION || process.env.IS_QA || process.env.IS_DEV ? "mongodb+srv://".concat(process.env.MONGO_DB_USERNAME, ":").concat(process.env.MONGO_DB_PASSWORD, "@").concat(process.env.MONGO_DB_CLUSTER, ".mongodb.net/").concat(process.env.MONGO_DB_NAME, "?retryWrites=true&w=majority") : "mongodb://localhost:27017/spark";
var connectDatabase = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _mongoose["default"].connect(MONGO_URI);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function connectDatabase() {
    return _ref.apply(this, arguments);
  };
}();
connectDatabase().then(function () {
  return console.log("MongoDb Connected...");
})["catch"](function (error) {
  return console.log("Cannot connect mongo Db. Error: ".concat(error.message, ", connection string is : ").concat(MONGO_URI));
});
var app = (0, _express["default"])();
app.use((0, _nocache["default"])());
app.set("baseFrontEndUrl", BASE_FRONT_END_URL);
app.set("baseBackEndUrl", BASE_BACK_END_URL);
app.use(_express["default"].json());
app.use(_express["default"]["static"](_path["default"].join(__dirname, "build")));

// initialize discord startegy
app.use((0, _cookieParser["default"])());
app.use(_passport["default"].initialize());
(0, _discordStrategy.discordStrategy)(app);
var apiRouter = _express["default"].Router();
_routes.routes.forEach(function (route) {
  var middleware = route.middleware ? route.middleware : [];
  apiRouter[route.method].apply(apiRouter, [route.path, _middleware.addUserToRoute].concat((0, _toConsumableArray2["default"])(middleware), [(0, _middleware.protectRoute)(route.protectors), route.handler]));
});
app.use("/api", apiRouter);
app.get("*", function (req, res) {
  res.sendFile(_path["default"].join(__dirname, "build", "index.html"), {
    lastModified: false,
    etag: false
  });
});
var start = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          app.listen(PORT, function () {
            console.log("Server is listening on port " + PORT);
          });
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function start() {
    return _ref2.apply(this, arguments);
  };
}();
start();
process.on("SIGINT", function () {
  console.log("Stopping server...");
  process.exit();
});