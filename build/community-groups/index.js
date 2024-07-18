"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addGroupActivity", {
  enumerable: true,
  get: function get() {
    return _addGroupActivity.addGroupActivity;
  }
});
exports.routes = void 0;
var _addAGroupRoute = require("./addAGroupRoute");
var _joinGroupRoute = require("./joinGroupRoute");
var _getGroupsRoute = require("./getGroupsRoute");
var _getGroupDetailRoute = require("./getGroupDetailRoute");
var _addBulletinRoute = require("./addBulletinRoute");
var _createTournamentRoute = require("./createTournamentRoute");
var _getTournamentForGroupRoute = require("./getTournamentForGroupRoute");
var _getTournamentDetailsRoute = require("./getTournamentDetailsRoute");
var _updateTournamentRoute = require("./updateTournamentRoute");
var _addRoundRobinGroupRoute = require("./addRoundRobinGroupRoute");
var _getAllRoundsRoute = require("./getAllRoundsRoute");
var _addGroupActivity = require("./addGroupActivity");
var routes = exports.routes = [_getGroupsRoute.getGroupsRoute, _getGroupDetailRoute.getGroupDetailRoute, _addAGroupRoute.addAGroupRoute, _addRoundRobinGroupRoute.addRoundRobinGroupRoute, _joinGroupRoute.joinGroupRoute, _addBulletinRoute.addBulletinRoute, _getTournamentForGroupRoute.getTournamentForGroupRoute, _getTournamentDetailsRoute.getTournamentDetailsRoute, _getAllRoundsRoute.getAllRoundsRoute, _createTournamentRoute.createTournamentRoute, _updateTournamentRoute.updateTournamentRoute];