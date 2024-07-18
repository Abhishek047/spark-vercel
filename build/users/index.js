"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addOrganizationToPlayer", {
  enumerable: true,
  get: function get() {
    return _addOrganizationToPlayer.addOrganizationToPlayer;
  }
});
Object.defineProperty(exports, "createUserCustomToken", {
  enumerable: true,
  get: function get() {
    return _createUserCustomToken.createUserCustomToken;
  }
});
Object.defineProperty(exports, "createUserInAuth", {
  enumerable: true,
  get: function get() {
    return _createUserInAuth.createUserInAuth;
  }
});
Object.defineProperty(exports, "createUserInDB", {
  enumerable: true,
  get: function get() {
    return _createUserInDB.createUserInDB;
  }
});
Object.defineProperty(exports, "getPlayerByGoalId", {
  enumerable: true,
  get: function get() {
    return _getPlayerByGoalId.getPlayerByGoalId;
  }
});
Object.defineProperty(exports, "getUserByAuthId", {
  enumerable: true,
  get: function get() {
    return _getUserByAuthId.getUserByAuthId;
  }
});
Object.defineProperty(exports, "getUserByEmail", {
  enumerable: true,
  get: function get() {
    return _getUserByEmail.getUserByEmail;
  }
});
Object.defineProperty(exports, "getUserById", {
  enumerable: true,
  get: function get() {
    return _getUserById.getUserById;
  }
});
exports.routes = void 0;
Object.defineProperty(exports, "setUserToOnboarded", {
  enumerable: true,
  get: function get() {
    return _setUserToOnboarded.setUserToOnboarded;
  }
});
Object.defineProperty(exports, "updateDiscordInfo", {
  enumerable: true,
  get: function get() {
    return _updateDiscordInfo.updateDiscordInfo;
  }
});
Object.defineProperty(exports, "updateUser", {
  enumerable: true,
  get: function get() {
    return _updateUser.updateUser;
  }
});
var _createUserRoute = require("./createUserRoute");
var _getSchoolsForUserRoute = require("./getSchoolsForUserRoute");
var _getUserRoute = require("./getUserRoute");
var _getUserInfoRoute = require("./getUserInfoRoute");
var _updateUserRoute = require("./updateUserRoute");
var _createUserInAuth = require("./createUserInAuth");
var _createUserInDB = require("./createUserInDB");
var _createUserCustomToken = require("./createUserCustomToken");
var _updateDiscordInfo = require("./updateDiscordInfo");
var _getUserByEmail = require("./getUserByEmail");
var _getUserById = require("./getUserById");
var _getUserByAuthId = require("./getUserByAuthId");
var _setUserToOnboarded = require("./setUserToOnboarded");
var _updateUser = require("./updateUser");
var _addOrganizationToPlayer = require("./addOrganizationToPlayer");
var _getPlayerByGoalId = require("./getPlayerByGoalId");
var routes = exports.routes = [_createUserRoute.createUserRoute, _getSchoolsForUserRoute.getSchoolsForUserRoute, _getUserRoute.getUserRoute, _getUserInfoRoute.getUserInfoRoute, _updateUserRoute.updateUserRoute];