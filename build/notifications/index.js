"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createNotification", {
  enumerable: true,
  get: function get() {
    return _createNotification.createNotification;
  }
});
exports.routes = void 0;
var _getNotificationsForUserRoute = require("./getNotificationsForUserRoute");
var _createNotification = require("./createNotification");
var routes = exports.routes = [_getNotificationsForUserRoute.getNotificationsForUserRoute];