"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Goal = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
//team.game
//team.id
//player

//goal name
//metric

var Schema = _mongoose["default"].Schema;
var GoalSchema = new Schema({
  goalName: {
    type: String,
    required: true
  },
  game: {
    type: String,
    required: true
  },
  // captain for team
  // user_allowed: {
  //     type: Schema.Types.ObjectId,
  //     ref: "users",
  // },
  teamId: {
    type: Schema.Types.ObjectId,
    ref: 'groups'
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  player: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  metric: {
    type: String,
    required: true
  },
  result: {
    type: Number,
    required: true
  },
  createdById: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  // time: {
  //   type: String,
  // },
  data: [{
    date: {
      type: Date,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }]
}, {
  timestamps: true
});
var Goal = exports.Goal = _mongoose["default"].model('goal', GoalSchema);

// export const INTERVAL_WEEKLEY = "WEEKLY";
// export const INTERVAL_DAILY = "DAILY";
// // supported types till now
// // validate while creation
// export const FIELD_TYPE_NUMBER = "NUMBER";
// export const FIELD_TYPE_TEXT = "TEXT";

// // current valid field types
// export const VALID_FIELD_TYPES = [FIELD_TYPE_TEXT, FIELD_TYPE_NUMBER];