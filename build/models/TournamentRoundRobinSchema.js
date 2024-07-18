"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TournamentRound = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var Schema = _mongoose["default"].Schema;
var TournamentRoundRobinSchema = new Schema({
  tournament_id: {
    type: Schema.Types.ObjectId,
    ref: "tournament"
  },
  group_name: String,
  teams: [{
    id: {
      type: Schema.Types.ObjectId,
      ref: "groups"
    },
    name: String
  }],
  rounds: [(0, _defineProperty2["default"])((0, _defineProperty2["default"])({
    date: Date,
    team_one: String
  }, "team_one", String), "winning_team", String)]
}, {
  timestamps: true
});
var TournamentRound = exports.TournamentRound = _mongoose["default"].model("tournament-round-robin", TournamentRoundRobinSchema);