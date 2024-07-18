"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;
var _discordAuthRoute = require("./discordAuthRoute");
var _discordAuthRedirect = require("./discordAuthRedirect");
var _discordLinkRoute = require("./discordLinkRoute");
var _getDiscordUrl = require("./getDiscordUrl");
var _verifyDummyRoute = require("./verifyDummyRoute");
var routes = exports.routes = [_discordAuthRoute.discordLoginRoute, _discordAuthRedirect.discordAuthRedirectRoute, _discordLinkRoute.discordLinkRoute, _getDiscordUrl.getDiscordUrl, _verifyDummyRoute.verifyDummyRoute];