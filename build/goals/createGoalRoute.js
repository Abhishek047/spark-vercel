"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGoalRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _routeProtectors = require("../route-protectors");
var _users = require("../users");
var _createGoal = require("./createGoal");
var createGoalRoute = exports.createGoalRoute = {
  path: '/create-goal',
  method: 'post',
  protectors: [_routeProtectors.isLoggedInProtector, _routeProtectors.isVerifiedProtector],
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var authUser, _req$body, goalName, game, teamId, startDate, endDate, player, metric, result, user, createdById, goalId;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            authUser = req.user;
            _req$body = req.body, goalName = _req$body.goalName, game = _req$body.game, teamId = _req$body.teamId, startDate = _req$body.startDate, endDate = _req$body.endDate, player = _req$body.player, metric = _req$body.metric, result = _req$body.result;
            _context.prev = 2;
            if (!(!goalName || !metric || !startDate || !endDate || !result)) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return", res.status(400).json({
              success: false,
              message: 'Please fill the required field'
            }));
          case 5:
            _context.next = 7;
            return (0, _users.getUserByAuthId)(authUser.user_id);
          case 7:
            user = _context.sent;
            createdById = user._id; // user creating the goal
            // const user = await getUserByAuthId(authUser.user_id);
            // const createdById = user._id;
            // const eventId = await createEvent({
            //     name: goalName,
            //     startdate: startDate,
            //     event_type: GOAL,
            //     description,
            //     created_by: createdById,
            //     invitees: [
            //         ...invitees,
            //         {
            //             id: user._id,
            //             name: user.full_name,
            //             email: user.email,
            //             gamerName: user.gamer_name,
            //             profile_img: user.profile_img,
            //             bio: user.bio,
            //         },
            //     ],
            // });
            // create a goal
            _context.next = 11;
            return (0, _createGoal.createGoal)({
              goalName: goalName,
              teamId: teamId,
              game: game,
              startDate: startDate,
              endDate: endDate,
              player: player,
              metric: metric,
              result: result,
              createdById: createdById
            });
          case 11:
            goalId = _context.sent;
            // everything we  normally
            console.log('Goal-created');
            return _context.abrupt("return", res.status(200).json({
              success: true,
              goalId: goalId
            }));
          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500).json({
              success: false,
              message: _context.t0.message
            }));
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 16]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};