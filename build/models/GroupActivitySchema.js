"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ORGANIZATION_LEFT = exports.ORGANIZATION_JOINED = exports.GROUP_CREATED = exports.CommunityGroupsActivity = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var Schema = _mongoose["default"].Schema;
var GroupActivitySchema = new Schema({
  activity_name: String,
  activity_value: String,
  community_group: {
    type: Schema.Types.ObjectId,
    ref: "community-groups"
  }
}, {
  timestamps: true
});
var CommunityGroupsActivity = exports.CommunityGroupsActivity = _mongoose["default"].model("groups-activity", GroupActivitySchema);
var GROUP_CREATED = exports.GROUP_CREATED = "GROUP_CREATED";
var ORGANIZATION_JOINED = exports.ORGANIZATION_JOINED = "ORGANIZATION_JOINED";
var ORGANIZATION_LEFT = exports.ORGANIZATION_LEFT = "ORGANIZATION_LEFT";