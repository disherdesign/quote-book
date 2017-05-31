angular.module('app').controller('manager',function($scope, workers) {

$scope.quotes = workers.getQuotes();

$scope.deleteMe = function(textToDelete){
  workers.removeData(textToDelete);
}

$scope.addQuote = function(){
  var newQuote = {
    text:$scope.newQuoteText,
    author:$scope.newQuoteAuthor
  }
  if(workers.addData(newQuote))
  {
    $scope.newQuoteText = '';
    $scope.newQuoteAuthor= '';
  }
}
})