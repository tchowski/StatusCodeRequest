angular.module('todoApp', []).controller('dataStats', ['$scope', '$http', function($scope, $http) {

    $scope.incidents = [];
    $scope.incidents.nouveauIncidentDuJour = [];

  $scope.getStatusFromApi = () => {

    $http.get("http://localhost:57850/syncStats").then(function(response) {
        $scope.incidents = response.data;
        console.log('TCL: $scope.getStatusFromApi -> $scope.incidents', $scope.incidents);

        $scope.statuscode = response.status;
        $scope.statustext = response.statusText;
        console.log("Le code de status est " + $scope.statuscode);
    });
  };

  $scope.getStatusFromApi();

  setInterval(() => {
  $scope.getStatusFromApi();
  console.log("Je marche");
  }, 120000)
}]);