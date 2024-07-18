"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPermission = void 0;
var _models = require("../models");
var addPermission = exports.addPermission = function addPermission(_ref) {
  var userId = _ref.userId,
    groupId = _ref.groupId,
    permissionType = _ref.permissionType;
  return new _models.Permissions({
    userId: userId,
    groupId: groupId,
    permission_type: permissionType
  }).save();
};