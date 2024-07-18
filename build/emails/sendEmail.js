"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = void 0;
var _mail = _interopRequireDefault(require("@sendgrid/mail"));
var _util = require("../util");
_mail["default"].setApiKey(process.env.SENDGRID_API_KEY);
var sendEmail = exports.sendEmail = function sendEmail(_ref) {
  var to = _ref.to,
    from = _ref.from,
    subject = _ref.subject,
    body = _ref.body;
  var emailConfig = {
    from: from,
    to: to,
    subject: subject,
    text: body
  };
  console.log("Email sent to -->" + to);
  return _mail["default"].send(emailConfig);
};