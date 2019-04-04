"use strict";

angular
  .module("standingListApp")
  .controller("mainCtrl", function($scope, $location, dataService) {
    dataService.getDrivers(function(response) {
      // console.log(response);
      $scope.drivers = response.data;
      // $scope.drivers = JSON.parse(response.data);
    });

    dataService.getTeams(function(response) {
      $scope.teams = response.data;
    });

    /*     $scope.decrement = function(driverName) {
      var filteredTodos = $scope.drivers.map(function(driver) {
        if ((driver.driver = driverName)) {
          return driver.points - 1;
        }
      });
    }; */

    $scope.deleteDriver = function(driver, $index) {
      dataService.deleteDriver(driver);
      $scope.drivers.splice($index, 1);
    };

    $scope.sumPoints = function() {
      let totalPoints = $scope.drivers.reduce(
        (accum, currentDriver) => accum + currentDriver.points,
        0
      );
      return totalPoints;
    };

    $scope.getTeam = function(team) {
      // console.log($scope.drivers.filter(driver => driver.team === team));
      // $scope.team = team;
      // $location.url("/" + team);
      $scope.drivers = $scope.drivers.filter(driver => driver.team === team);
      $scope.teamNum = team;
      $scope.detail = true;
      $scope.teamDetail = $scope.teams.filter(
        team => team.id === $scope.teamNum
      );
    };

    $scope.getTeamName = function(teamID) {
      let team = $scope.teams.find(team => team.id === teamID);
      return team.team;
    };
  });
