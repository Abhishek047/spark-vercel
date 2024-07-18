"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;
var _createWarRoomMatchRoute = require("./createWarRoomMatchRoute");
var _getAllMatchesRoute = require("./getAllMatchesRoute");
var _getWarRoomMatchRoute = require("./getWarRoomMatchRoute");
var _saveSessionStageRoute = require("./saveSessionStageRoute");
var routes = exports.routes = [_getAllMatchesRoute.getAllMatchesRoute, _getWarRoomMatchRoute.getWarRoomMatchRoute, _createWarRoomMatchRoute.createWarRoomMatchRoute, _saveSessionStageRoute.saveSessionStageRoute];