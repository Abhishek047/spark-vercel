"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VALID_FIELD_TYPES = exports.StatsInformation = exports.INTERVAL_WEEKLEY = exports.INTERVAL_DAILY = exports.FIELD_TYPE_TEXT = exports.FIELD_TYPE_NUMBER = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var Schema = _mongoose["default"].Schema;
var StatsInformationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  is_goal: {
    type: Boolean,
    required: true
  },
  is_stat: {
    type: Boolean,
    required: true
  },
  game: {
    type: String,
    required: true
  },
  for_team: {
    type: Boolean,
    "default": false
  },
  // captain for team
  user_allowed: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  teamId: {
    type: Schema.Types.ObjectId,
    ref: "groups"
  },
  created_by: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  interval: {
    type: String,
    validate: {
      validator: function validator(value) {
        return [INTERVAL_DAILY, INTERVAL_WEEKLEY].includes(value);
      },
      message: function message(props) {
        return "".concat(props.value, " is not a valid interval!");
      }
    }
  },
  players: [{
    type: Schema.Types.ObjectId,
    ref: "users"
  }],
  time: {
    type: String
  },
  fields: [{
    name: String,
    field_type: String,
    is_required: Boolean
  }]
}, {
  timestamps: true
});
var StatsInformation = exports.StatsInformation = _mongoose["default"].model("stats-information", StatsInformationSchema);
var INTERVAL_WEEKLEY = exports.INTERVAL_WEEKLEY = "WEEKLY";
var INTERVAL_DAILY = exports.INTERVAL_DAILY = "DAILY";
// supported types till now
// validate while creation
var FIELD_TYPE_NUMBER = exports.FIELD_TYPE_NUMBER = "NUMBER";
var FIELD_TYPE_TEXT = exports.FIELD_TYPE_TEXT = "TEXT";

// current valid field types
var VALID_FIELD_TYPES = exports.VALID_FIELD_TYPES = [FIELD_TYPE_TEXT, FIELD_TYPE_NUMBER];