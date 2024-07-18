"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createRoster", {
  enumerable: true,
  get: function get() {
    return _createRoster.createRoster;
  }
});
Object.defineProperty(exports, "getRosterById", {
  enumerable: true,
  get: function get() {
    return _getRosterById.getRosterById;
  }
});
Object.defineProperty(exports, "getRostersForTeam", {
  enumerable: true,
  get: function get() {
    return _getRostersForTeam.getRostersForTeam;
  }
});
exports.routes = void 0;
var _deleteRosterRoute = require("./deleteRosterRoute");
var _editRosterNameRoute = require("./editRosterNameRoute");
var _addRosterRoute = require("./addRosterRoute");
var _createRoster = require("./createRoster");
var _getRostersForTeam = require("./getRostersForTeam");
var _getRosterById = require("./getRosterById");
var routes = exports.routes = [_deleteRosterRoute.deleteRosterRoute, _editRosterNameRoute.editRosterNameRoute, _addRosterRoute.addRosterRoute];