"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addMembersToSchool", {
  enumerable: true,
  get: function get() {
    return _addMembersToSchool.addMembersToSchool;
  }
});
Object.defineProperty(exports, "getSchoolForGroup", {
  enumerable: true,
  get: function get() {
    return _getSchoolForGroup.getSchoolForGroup;
  }
});
Object.defineProperty(exports, "getSchoolsForUser", {
  enumerable: true,
  get: function get() {
    return _getSchoolsForUser.getSchoolsForUser;
  }
});
Object.defineProperty(exports, "isCoachForSchool", {
  enumerable: true,
  get: function get() {
    return _isCoachForSchool.isCoachForSchool;
  }
});
exports.routes = void 0;
var _createOrganizationRoute = require("./createOrganizationRoute");
var _addLeagueToOrganizationRoute = require("./addLeagueToOrganizationRoute");
var _getAllLeaguesForOrganizationRoute = require("./getAllLeaguesForOrganizationRoute");
var _deleteLeagueRoute = require("./deleteLeagueRoute");
var _addMatchInLeagueRoute = require("./addMatchInLeagueRoute");
var _getSchoolForGroup = require("./getSchoolForGroup");
var _getSchoolsForUser = require("./getSchoolsForUser");
var _isCoachForSchool = require("./isCoachForSchool");
var _addMembersToSchool = require("./addMembersToSchool");
var routes = exports.routes = [_createOrganizationRoute.createOrganizationRoute, _addLeagueToOrganizationRoute.addLeagueToOrganizationRoute, _addMatchInLeagueRoute.addMatchInLeagueRoute, _getAllLeaguesForOrganizationRoute.getAllLeaguesForOrganizationRoute, _deleteLeagueRoute.deleteLeagueRoute];

// export { createOrganization } from "./createSchool";