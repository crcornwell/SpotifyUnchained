'use strict';

angular.module('core').controller('NewTuesdayPlaylistController', ['$scope', 'Spotify',
  function($scope, Spotify) {
    $scope.oneAtATime = true;
    $scope.data = Spotify.query();

  }
]);