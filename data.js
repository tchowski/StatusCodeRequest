angular.module('todoApp', [])
.controller('dataHugo', ['$scope', '$http', function($scope, $http) {

    // $scope  = variable global de ton js/html qui sert a faire du traitement front

    // Je recupère la data de ma route
    //response.status
  $scope.getStatusFromApi = () => {

    $http.get("MonURL").then(function(response) {
        $scope.content = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText;
        console.log($scope.content);
    });
  };
  $scope.getStatusFromApi();
}]);