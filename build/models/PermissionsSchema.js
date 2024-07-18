"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Permissions = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _validPermission = require("./validPermission");
var Schema = _mongoose["default"].Schema;
var PermissionsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  groupId: {
    type: Schema.Types.ObjectId,
    ref: "groups"
  },
  permission_type: {
    type: String,
    validate: {
      validator: function validator(value) {
        return _validPermission.VALID_PERMISSIONS.includes(value);
      },
      message: function message(props) {
        return "".concat(props.value, " is not a valid permissions group!");
      }
    },
    required: true
  }
}, {
  timestamps: true
});
var Permissions = exports.Permissions = _mongoose["default"].model("permissions", PermissionsSchema);