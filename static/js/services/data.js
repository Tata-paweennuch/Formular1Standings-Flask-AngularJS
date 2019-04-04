"use strict";

angular.module("standingListApp").service("dataService", function($http) {
  this.getDrivers = function(callback) {
    $http.get("/api/standings.json")
      .success(function() {
        $log.log(results);
      })
      .error(function() {
        $log.log(error);
      })
      .then(callback)
    // $http.get("../data/drivers.json").then(callback);
    // $http.get("/api/standings.json").then(callback);
  };

  this.getTeams = function(callback) {
    $http.get("/api/teams.json").then(callback);
  };

  this.getTeamDetail = function(id, callback) {
    $http.get("/api/team/" + id + ".json").then(callback)
  }

  this.deleteDriver = function(driver) {
    console.log("The " + driver.driver + " driver has been deleted!");
    // other logic
  };

  /*   this.saveTodos = function(todos) {
    console.log(todos.length + " todos have been saved!");
    // other logic...
  }; */
});
