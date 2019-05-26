const app = angular.module( 'app', []);

app.controller('UnitTestController', ['$scope', 'UnitTestService', function($scope, UnitTestService){
  $scope.inputValue;
  $scope.submitInput = function(inputValue){
    $scope.outputValue = UnitTestService.submitInput(inputValue);
  };
}]);

app.service('UnitTestService', [function(){
  this.submitInput = function(inputValue){
    return getOutputValue(inputValue);
  };

  const getOutputValue = function(inputValue){
    const outputValue = {};
    outputValue.value1 = getValue1(inputValue);
    outputValue.value2 = getValue2(inputValue);
    return outputValue;
  }

  const getValue1 = function(inputValue){
    if(typeof inputValue === 'undefined'){
      return "undefined input value";
    } else {
      return inputValue + 1;
    }
  }

  const getValue2 = function(inputValue){
    return inputValue + 2;
  }


}]);
