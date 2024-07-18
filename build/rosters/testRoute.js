"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testRoute = void 0;
var testRoute = exports.testRoute = {
  method: 'get',
  path: '/test',
  handler: function handler(req, res) {
    res.send('Hello!');
  }
};