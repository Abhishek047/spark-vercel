"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEventRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _validEventTypes = require("../models/validEventTypes");
var _notifications = require("../notifications");
var _users = require("../users");
var _createEvent = require("./createEvent");
var _sendEventEmail = require("./sendEventEmail");
var createEventRoute = exports.createEventRoute = {
  path: "/events",
  method: "post",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$body, name, description, dateRaw, time, _req$body$invitees, invitees, backgroundColor, date, authUser, user, createdById, eventId, invitee;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, description = _req$body.description, dateRaw = _req$body.date, time = _req$body.time, _req$body$invitees = _req$body.invitees, invitees = _req$body$invitees === void 0 ? [] : _req$body$invitees, backgroundColor = _req$body.backgroundColor;
            date = new Date(dateRaw);
            authUser = req.user;
            _context.prev = 3;
            _context.next = 6;
            return (0, _users.getUserByAuthId)(authUser.user_id);
          case 6:
            user = _context.sent;
            createdById = user._id;
            _context.next = 10;
            return (0, _createEvent.createEvent)({
              name: name,
              time: time,
              date: date,
              // later take it from the body
              event_type: _validEventTypes.DISCUSSION,
              description: description,
              background_color: backgroundColor,
              created_by: createdById,
              invitees: [].concat((0, _toConsumableArray2["default"])(invitees), [{
                id: user._id,
                email: user.email,
                name: user.full_name,
                gamerName: user.gamer_name,
                profile_img: user.profile_img,
                bio: user.bio
              }])
            });
          case 10:
            eventId = _context.sent;
            _context.t0 = _regenerator["default"].keys(invitees);
          case 12:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 18;
              break;
            }
            invitee = _context.t1.value;
            _context.next = 16;
            return (0, _notifications.createNotification)({
              userId: invitee.id,
              message: "You have been added to event \"".concat(name, "\" at ").concat(time),
              createdAt: Date.now()
            });
          case 16:
            _context.next = 12;
            break;
          case 18:
            return _context.abrupt("return", res.status(200).json({
              eventId: eventId
            }));
          case 21:
            _context.prev = 21;
            _context.t2 = _context["catch"](3);
            console.log(_context.t2.message);
            return _context.abrupt("return", res.status(500).json({
              message: _context.t2.message
            }));
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 21]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};