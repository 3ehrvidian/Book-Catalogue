let app = angular.module('bcApp', [])

app.controller('bookCtrl',function($scope, $http){

    
    let url = 'http://127.0.0.1:8000/api/book/'
    $http.get(url).then(function(data){
        $scope.books = data.data;
    })

    $scope.saveIdBook = function(id){
        $scope.idBook = id;
    }

    $scope.getBook = function(id){
        $scope.idEdit = id
        $http.get("http://127.0.0.1:8000/api/book/" + $scope.idEdit + "/").then(function (book_data){
            $scope.bookById = book_data.book_data;
        })
    }

    $scope.postBook = function(){
        let url = 'http://127.0.0.1:8000/api/book/'
        $http.post(url, JSON.stringify($scope.data)).then(function success(response){
            alert('Success');
            location.reload();
        })
    }

    $scope.updateBook = function(){
        let url = 'http://127.0.0.1:8000/api/book/'
        $http.put(url, JSON.stringify($scope.data)).then(function success(response){
            alert('Success');
            location.reload();
        })
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