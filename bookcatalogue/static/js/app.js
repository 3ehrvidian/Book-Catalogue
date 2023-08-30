let app = angular.module('bcApp', [])

app.controller('bookCtrl',function($scope, $http){
    
    let url = 'http://localhost:8000/api/book/2'
    $http.get(url).then(function(data){
        $scope.books = data;
    })
})