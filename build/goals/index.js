"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addGoalData", {
  enumerable: true,
  get: function get() {
    return _addGoalData.addGoalData;
  }
});
Object.defineProperty(exports, "createGoal", {
  enumerable: true,
  get: function get() {
    return _createGoal.createGoal;
  }
});
Object.defineProperty(exports, "getGoal", {
  enumerable: true,
  get: function get() {
    return _getGoal.getGoal;
  }
});
Object.defineProperty(exports, "getGoals", {
  enumerable: true,
  get: function get() {
    return _getGoals.getGoals;
  }
});
exports.routes = void 0;
var _createGoalRoute = require("./createGoalRoute");
var _getGoalRoute = require("./getGoalRoute");
var _getGoalsRoute = require("./getGoalsRoute");
var _addGoalDataRoute = require("./addGoalDataRoute");
var _deleteGoalDataRoute = require("./deleteGoalDataRoute");
var _deleteGoalRoute = require("./deleteGoalRoute");
var _createGoal = require("./createGoal");
var _getGoals = require("./getGoals");
var _getGoal = require("./getGoal");
var _addGoalData = require("./addGoalData");
var _deleteGoalData = require("./deleteGoalData");
var routes = exports.routes = [_createGoalRoute.createGoalRoute, _getGoalsRoute.getGoalsRoute, _getGoalRoute.getGoalRoute, _addGoalDataRoute.addGoalDataRoute, _deleteGoalDataRoute.deleteGoalDataRoute, _deleteGoalRoute.deleteGoalRoute];