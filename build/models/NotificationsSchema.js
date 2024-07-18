"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notifications = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var Schema = _mongoose["default"].Schema;
var NotificationsSchema = new Schema({
  userId: {
    type: String
  },
  message: {
    type: String,
    "default": ""
  },
  createdAt: {
    type: Date,
    require: true
  },
  isRead: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});
var Notifications = exports.Notifications = _mongoose["default"].model("notifications", NotificationsSchema);