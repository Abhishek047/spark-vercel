"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getAllScrimmage", {
  enumerable: true,
  get: function get() {
    return _getAllScrimmage.getAllScrimmage;
  }
});
exports.routes = void 0;
var _createScrimmageRoute = require("./createScrimmageRoute");
var _getAllScrimmageRoute = require("./getAllScrimmageRoute");
var _intresetedInScrimmageRoute = require("./intresetedInScrimmageRoute");
var _removeIntrestRoute = require("./removeIntrestRoute");
var _declineInvitationRoute = require("./declineInvitationRoute");
var _acceptInvitationRoute = require("./acceptInvitationRoute");
var _getAllScrimmage = require("./getAllScrimmage");
var routes = exports.routes = [_getAllScrimmageRoute.getAllScrimmageRoute, _createScrimmageRoute.createScrimmageRoute, _intresetedInScrimmageRoute.intresetedInScrimmageRoute, _removeIntrestRoute.removeIntrestRoute, _declineInvitationRoute.declineInvitationRoute, _acceptInvitationRoute.acceptInvitationRoute];