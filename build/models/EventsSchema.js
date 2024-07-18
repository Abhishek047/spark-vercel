"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Events = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _validEventTypes = require("./validEventTypes");
var Schema = _mongoose["default"].Schema;
var EventsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  background_color: {
    background: {
      type: String,
      "default": ''
    },
    name: {
      type: String,
      "default": ''
    }
  },
  description: {
    type: String,
    "default": ''
  },
  invitees: [{
    id: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    name: String,
    email: String,
    gamerName: String,
    bio: String,
    profile_img: String
  }],
  time: {
    type: String
  },
  year: {
    type: String
  },
  month: {
    type: String
  },
  date: {
    type: Date
  },
  // need all event types
  event_type: {
    type: String,
    validate: {
      validator: function validator(value) {
        return _validEventTypes.VALID_EVENTS.includes(value);
      },
      message: function message(props) {
        return "".concat(props.value, " is not a valid event!");
      }
    }
  },
  // we can add more id of specic event details we want
  war_room_match_id: {
    type: Schema.Types.ObjectId,
    ref: 'war-room'
  }
}, {
  timestamps: true
});
var Events = exports.Events = _mongoose["default"].model('events', EventsSchema);