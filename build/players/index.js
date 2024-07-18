"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getPlayer", {
  enumerable: true,
  get: function get() {
    return _getPlayer.getPlayer;
  }
});
Object.defineProperty(exports, "getPlayersForRoster", {
  enumerable: true,
  get: function get() {
    return _getPlayersForRoster.getPlayersForRoster;
  }
});
exports.routes = void 0;
Object.defineProperty(exports, "updatePlayer", {
  enumerable: true,
  get: function get() {
    return _updatePlayer.updatePlayer;
  }
});
var _addNoteToPlayerRoute = require("./addNoteToPlayerRoute");
var _addPlayerRoute = require("./addPlayerRoute");
var _deleteNoteForPlayerRoute = require("./deleteNoteForPlayerRoute");
var _getNotesForPlayerRoute = require("./getNotesForPlayerRoute");
var _getPlayersForTeamRoute = require("./getPlayersForTeamRoute");
var _getPlayer = require("./getPlayer");
var _getPlayersForRoster = require("./getPlayersForRoster");
var _updatePlayer = require("./updatePlayer");
var routes = exports.routes = [_addNoteToPlayerRoute.addNoteToPlayerRoute, _addPlayerRoute.addPlayerRoute, _deleteNoteForPlayerRoute.deleteNoteForPlayerRoute, _getNotesForPlayerRoute.getNotesForPlayerRoute, _getPlayersForTeamRoute.getPlayersForTeamRoute];