"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatsEntry = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var Schema = _mongoose["default"].Schema;
var PlayerStatsEntrySchema = new Schema({
  statsId: {
    type: Schema.Types.ObjectId,
    ref: "stats-information"
  },
  group_report_id: {
    type: String
  },
  player: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  records: {
    type: Map,
    "default": {}
    // validate when created WRT to the fileds in stats-info fields
  }
}, {
  timestamps: true
});
var StatsEntry = exports.StatsEntry = _mongoose["default"].model("stats-entry", PlayerStatsEntrySchema);