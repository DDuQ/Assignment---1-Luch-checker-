(function () {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope) {
  $scope.name= "";
  $scope.qtyItems= 0;
  $scope.ms= ""; //check Message
  $scope.color= ""; //background color

  $scope.checkIfEmpty = function () {
    var str = $scope.name;
    var spl = str.split(',');
    var count= 0;
    for (var i=0; i<spl.length; i++){
      if(spl[i].trim()!=""){
        count++;
      }
    }
    $scope.qtyItems = count;
  }
  $scope.messageQuantity = function () {

    if($scope.qtyItems==0){
      $scope.ms= "Please enter data first";
      $scope.color= "backgroundr";
    } else if($scope.qtyItems<=3) {
      $scope.ms= "Enjoy!";
      $scope.color= "backgroundg";
    } else{
      $scope.ms= "Too much!";
      $scope.color= "backgroundg";
    }
  }



}

})();
