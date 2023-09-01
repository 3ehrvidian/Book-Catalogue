let app = angular.module('bcApp', [])

app.controller('bookCtrl',function($scope, $http){

    
    let url = 'http://127.0.0.1:8000/api/book/'
    $http.get(url).then(function(data){
        $scope.books = data.data;
    })

    $scope.postBook = function(){
        let url = 'http://127.0.0.1:8000/api/book/'
        $http.post(url, JSON.stringify($scope.data)).then(function success(response){
            alert('Success');
            location.reload();
        })
    }

    $scope.saveIdBook = function(id){
        $scope.idBook = id;
    }

    $scope.deleteBook = function(){        
        $http.delete("http://127.0.0.1:8000/api/book/" + $scope.idBook + "/")
            .then(function (response) {
                alert('Delete Success');
                location.reload();
            });
    }

    $scope.hello = function(){
        $("#signUpModal").modal("hide");
    }

})

// app.controller('postCtrl', function($scope, $http){

// })