"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var Schema = _mongoose["default"].Schema;
var UsersSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  auth_id: {
    type: String,
    "default": null
  },
  // invitation_from:,
  confirmationCode: String,
  full_name: String,
  gamer_name: String,
  profile_img: {
    type: String,
    "default": null
  },
  isConfirmed: Boolean,
  isOnboarded: Boolean,
  bio: String,
  organizations: [{
    type: Schema.Types.ObjectId,
    ref: 'groups'
  }],
  // discord information
  twitch: {
    type: String
  },
  classOf: {
    type: Number
  },
  discord: {
    linked: {
      type: Boolean,
      "default": false,
      reuired: true
    },
    email: String,
    username: String,
    discriminator: String,
    id: String
  }
}, {
  timestamps: true
});
var Users = exports.Users = _mongoose["default"].model('users', UsersSchema);