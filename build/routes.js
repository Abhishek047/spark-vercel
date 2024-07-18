"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _emailVerification = require("./email-verification");
var _invitations = require("./invitations");
var _notifications = require("./notifications");
var _onboarding = require("./onboarding");
var _permissions = require("./permissions");
var _players = require("./players");
var _rosters = require("./rosters");
var _scheduling = require("./scheduling");
var _schools = require("./schools");
var _teams = require("./teams");
var _users = require("./users");
var _test = require("./test");
var _warRoom = require("./war-room");
var _stats = require("./stats");
var _scrimmage = require("./scrimmage");
var _goals = require("./goals");
var _auth = require("./auth");
var _communityGroups = require("./community-groups");
var _groups = require("./groups");
var routes = exports.routes = [].concat((0, _toConsumableArray2["default"])(_emailVerification.routes), (0, _toConsumableArray2["default"])(_invitations.routes), (0, _toConsumableArray2["default"])(_notifications.routes), (0, _toConsumableArray2["default"])(_onboarding.routes), (0, _toConsumableArray2["default"])(_permissions.routes), (0, _toConsumableArray2["default"])(_players.routes), (0, _toConsumableArray2["default"])(_rosters.routes), (0, _toConsumableArray2["default"])(_scheduling.routes), (0, _toConsumableArray2["default"])(_schools.routes), (0, _toConsumableArray2["default"])(_teams.routes), (0, _toConsumableArray2["default"])(_users.routes), (0, _toConsumableArray2["default"])(_test.routes), (0, _toConsumableArray2["default"])(_warRoom.routes), (0, _toConsumableArray2["default"])(_stats.routes), (0, _toConsumableArray2["default"])(_scrimmage.routes), (0, _toConsumableArray2["default"])(_goals.routes), (0, _toConsumableArray2["default"])(_auth.routes), (0, _toConsumableArray2["default"])(_communityGroups.routes), (0, _toConsumableArray2["default"])(_groups.routes));