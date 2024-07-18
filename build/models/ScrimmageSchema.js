"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scrimmage = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var Schema = _mongoose["default"].Schema;
var ScrimmageSchema = new Schema({
  organizationId: {
    type: Schema.Types.ObjectId,
    ref: "groups"
  },
  organization_name: {
    type: String
  },
  organization_logo: {
    type: String
  },
  organization_location: {
    type: String
  },
  game: {
    type: String,
    required: true
  },
  teams: [{
    type: Schema.Types.ObjectId,
    ref: "groups"
  }],
  date: {
    type: Date
  },
  skill_level: {
    type: Number
  },
  open: {
    type: Boolean,
    "default": true
  },
  created_by: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  coaches: [{
    id: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    name: String
  }],
  requests: [{
    organizationId: {
      type: Schema.Types.ObjectId,
      ref: "groups"
    },
    organization_name: {
      type: String
    },
    organization_logo: {
      type: String
    },
    coachId: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    coach_name: {
      type: String
    },
    coach_contact: {
      type: String
    },
    note: {
      type: String
    },
    skill_level: {
      type: Number
    },
    viewed: {
      type: Boolean,
      "default": false,
      required: true
    },
    accepted: {
      type: Boolean,
      "default": false,
      required: true
    },
    declined: {
      type: Boolean,
      "default": false,
      required: true
    }
  }]
}, {
  timestamps: true
});
var Scrimmage = exports.Scrimmage = _mongoose["default"].model("scrimmages", ScrimmageSchema);