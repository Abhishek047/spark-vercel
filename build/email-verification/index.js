"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;
Object.defineProperty(exports, "sendVerificationEmail", {
  enumerable: true,
  get: function get() {
    return _sendVerificationEmail.sendVerificationEmail;
  }
});
Object.defineProperty(exports, "verifyUser", {
  enumerable: true,
  get: function get() {
    return _verifyUser.verifyUser;
  }
});
var _resendVerificationEmailRoute = require("./resendVerificationEmailRoute");
var _verifyEmailRoute = require("./verifyEmailRoute");
var _sendVerificationEmail = require("./sendVerificationEmail");
var _verifyUser = require("./verifyUser");
var routes = exports.routes = [_resendVerificationEmailRoute.resendVerificationEmailRoute, _verifyEmailRoute.verifyEmailRoute];