"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ADMIN", {
  enumerable: true,
  get: function get() {
    return _permissionTypes.ADMIN;
  }
});
Object.defineProperty(exports, "CAN_EDIT_EVENTS", {
  enumerable: true,
  get: function get() {
    return _permissionTypes.CAN_EDIT_EVENTS;
  }
});
Object.defineProperty(exports, "CAN_EDIT_GOALS", {
  enumerable: true,
  get: function get() {
    return _permissionTypes.CAN_EDIT_GOALS;
  }
});
Object.defineProperty(exports, "CAN_EDIT_MEMBERS", {
  enumerable: true,
  get: function get() {
    return _permissionTypes.CAN_EDIT_MEMBERS;
  }
});
Object.defineProperty(exports, "CAN_EDIT_NOTES", {
  enumerable: true,
  get: function get() {
    return _permissionTypes.CAN_EDIT_NOTES;
  }
});
Object.defineProperty(exports, "CAN_VIEW_EVENTS", {
  enumerable: true,
  get: function get() {
    return _permissionTypes.CAN_VIEW_EVENTS;
  }
});
Object.defineProperty(exports, "CAN_VIEW_GOALS", {
  enumerable: true,
  get: function get() {
    return _permissionTypes.CAN_VIEW_GOALS;
  }
});
Object.defineProperty(exports, "CAN_VIEW_MEMBERS", {
  enumerable: true,
  get: function get() {
    return _permissionTypes.CAN_VIEW_MEMBERS;
  }
});
Object.defineProperty(exports, "CAN_VIEW_NOTES", {
  enumerable: true,
  get: function get() {
    return _permissionTypes.CAN_VIEW_NOTES;
  }
});
Object.defineProperty(exports, "CAPTAIN", {
  enumerable: true,
  get: function get() {
    return _permissionTypes.CAPTAIN;
  }
});
Object.defineProperty(exports, "PLAYER", {
  enumerable: true,
  get: function get() {
    return _permissionTypes.PLAYER;
  }
});
Object.defineProperty(exports, "addPermission", {
  enumerable: true,
  get: function get() {
    return _addPermission.addPermission;
  }
});
Object.defineProperty(exports, "createAdminPermissionForGroup", {
  enumerable: true,
  get: function get() {
    return _createAdminPermissionForGroup.createAdminPermissionForGroup;
  }
});
Object.defineProperty(exports, "createNewPlayerPermission", {
  enumerable: true,
  get: function get() {
    return _createNewPlayerPermission.createNewPlayerPermission;
  }
});
Object.defineProperty(exports, "hasPermission", {
  enumerable: true,
  get: function get() {
    return _hasPermission.hasPermission;
  }
});
Object.defineProperty(exports, "removeAllPermissionsOfGroup", {
  enumerable: true,
  get: function get() {
    return _removeAllPermissionsOfGroup.removeAllPermissionsOfGroup;
  }
});
Object.defineProperty(exports, "removePermission", {
  enumerable: true,
  get: function get() {
    return _removePermission.removePermission;
  }
});
exports.routes = void 0;
var _addPermissionsRoute = require("./addPermissionsRoute");
var _changePermissionRoute = require("./changePermissionRoute");
var _removePermissionsRoute = require("./removePermissionsRoute");
var _getAllPermissionsForUserRoute = require("./getAllPermissionsForUserRoute");
var _permissionTypes = require("./permissionTypes");
var _addPermission = require("./addPermission");
var _hasPermission = require("./hasPermission");
var _removePermission = require("./removePermission");
var _createAdminPermissionForGroup = require("./createAdminPermissionForGroup");
var _createNewPlayerPermission = require("./createNewPlayerPermission");
var _removeAllPermissionsOfGroup = require("./removeAllPermissionsOfGroup");
var routes = exports.routes = [_addPermissionsRoute.addPermissionsRoute, _changePermissionRoute.changePermissionRoute, _removePermissionsRoute.removePermissionsRoute, _getAllPermissionsForUserRoute.getAllPermissionsForUserRoute];