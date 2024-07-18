"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Registration = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var Schema = _mongoose["default"].Schema;
var TournamentRegistrationSchema = new Schema({
  registered_by: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  organization_id: {
    type: Schema.Types.ObjectId,
    ref: "groups"
  },
  roster_id: {
    type: Schema.Types.ObjectId,
    ref: "groups"
  },
  game_applied: String,
  is_roster_final: Boolean,
  final_player: [{
    id: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    name: String,
    email: String,
    gamerName: String,
    profile_img: String,
    bio: String
  }]
}, {
  timestamps: true
});
var Registration = exports.Registration = _mongoose["default"].model("registration", TournamentRegistrationSchema);