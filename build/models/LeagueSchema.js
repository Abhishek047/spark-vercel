"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.League = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var Schema = _mongoose["default"].Schema;
var LeagueSchema = new Schema({
  created_by: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  groupId: {
    type: Schema.Types.ObjectId,
    ref: "groups"
  },
  team: String,
  tournament: String,
  game: String,
  ongoing: {
    type: Boolean,
    "default": true
  },
  finished: {
    type: Boolean,
    "default": false
  },
  matches: [{
    opponent: String,
    win: {
      type: Boolean,
      "default": false
    },
    lose: {
      type: Boolean,
      "default": false
    },
    notes: String,
    match_date: Date
  }]
}, {
  timestamps: true
});
var League = exports.League = _mongoose["default"].model("leagues", LeagueSchema);