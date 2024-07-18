"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tournament = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var Schema = _mongoose["default"].Schema;
var TournamentSchema = new Schema({
  created_by_user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  created_by_organization: {
    type: Schema.Types.ObjectId,
    ref: "groups"
  },
  community_group: {
    type: Schema.Types.ObjectId,
    ref: "community-groups"
  },
  publishable: {
    type: Boolean,
    "default": false,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  start_date: {
    type: Date
  },
  image_url: String,
  price_pool_description: {
    type: String
  },
  entry_fee: {
    type: Number
  },
  game: String,
  description: String,
  reporting_time: String,
  max_teams: Number,
  min_teams: Number,
  // it will be when there is add_group_stage as true
  add_group_stage: {
    type: Boolean,
    "default": false
  },
  brackets: [],
  registered_organizations: [{
    registration_id: {
      type: Schema.Types.ObjectId,
      ref: "registration"
    },
    organization_id: {
      type: Schema.Types.ObjectId,
      ref: "groups"
    },
    organization_name: String,
    rosterId: {
      type: Schema.Types.ObjectId,
      ref: "groups"
    },
    is_final: String,
    profile_img: String,
    game_applied: String
  }]
}, {
  timestamps: true
});
var Tournament = exports.Tournament = _mongoose["default"].model("tournament", TournamentSchema);