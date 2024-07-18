"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Invitation = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _validGroups = require("./validGroups");
var Schema = _mongoose["default"].Schema;
var InvitationSchema = new Schema({
  confirmationCode: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  invitedBy: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  inTeamAlready: Boolean,
  teamId: String,
  inRosterAlready: Boolean,
  rosterId: String,
  playerHasOrganization: Boolean,
  organizationId: String,
  isConfirmed: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});
var Invitation = exports.Invitation = _mongoose["default"].model("invitation", InvitationSchema);