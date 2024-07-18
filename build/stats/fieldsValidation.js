"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fieldsValidation = void 0;
var _models = require("../models");
var fieldsValidation = exports.fieldsValidation = function fieldsValidation(fields) {
  // might change in future once we have more fields
  return fields.every(function (_ref) {
    var name = _ref.name,
      field_type = _ref.field_type;
    return name !== "" && _models.VALID_FIELD_TYPES.includes(field_type);
  });
};