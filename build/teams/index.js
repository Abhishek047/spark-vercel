"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createTeam", {
  enumerable: true,
  get: function get() {
    return _createTeam.createTeam;
  }
});
Object.defineProperty(exports, "getTeamForGroup", {
  enumerable: true,
  get: function get() {
    return _getTeamForGroup.getTeamForGroup;
  }
});
exports.routes = void 0;
var _createTeamRoute = require("./createTeamRoute");
var _deleteTeamRoute = require("./deleteTeamRoute");
var _getTeamRoute = require("./getTeamRoute");
var _getAllGroupsForUser = require("./getAllGroupsForUser");
var _editTeamRoute = require("./editTeamRoute");
var _testRoute = require("./testRoute");
var _createTeam = require("./createTeam");
var _getTeamForGroup = require("./getTeamForGroup");
var routes = exports.routes = [_createTeamRoute.createTeamRoute, _deleteTeamRoute.deleteTeamRoute, _getTeamRoute.getTeamRoute, _getAllGroupsForUser.getAllGroupsForUser, _editTeamRoute.editTeamRoute, _testRoute.testRoute];