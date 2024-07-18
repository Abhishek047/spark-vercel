"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toFormData = void 0;
var toFormData = exports.toFormData = function toFormData(obj) {
  var formData = new FormData();
  Object.keys(obj).forEach(function (key) {
    return formData.append(key, obj[key]);
  });
  return formData;
};