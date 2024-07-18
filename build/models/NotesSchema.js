"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notes = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var Schema = _mongoose["default"].Schema;
var NotesSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  created_by: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
}, {
  timestamps: true
});
var Notes = exports.Notes = _mongoose["default"].model("notes", NotesSchema);