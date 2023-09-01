let app = angular.module('bcApp', [])

app.controller('detailCtrl',function($scope, $http, $location){
    $scope.urlDetail = $location.absUrl();

    let url = 'http://127.0.0.1:8000/api/book/'+$scope.urlDetail.split('/')[4]+'/'
    $http.get(url).then(function(data){
        $scope.books = data.data;
    })
});

app.controller('bookCtrl',function($scope, $http, $location){
    
    let url = 'http://127.0.0.1:8000/api/book/'
    $http.get(url).then(function(data){
        $scope.books = data.data;
        $scope.dataForDetail = {}
        $scope.dataForUpdate = {}
        $scope.dataForDelete = {}
    })
    
    $scope.loadData = function(){
        let url = 'http://127.0.0.1:8000/api/book/'
        $http.get(url).then(function(data){
            $scope.books = data.data;                     
        })
    }

    $scope.toDetails = function(id){ 
        $scope.bookId = angular.copy(id)                       
        window.location.href = 'book' + '/' + $scope.bookId +'/'
    }

    $scope.test = function(){
        $scope.testUrl = $location.absUrl();
        alert($scope.testUrl.split('/')[4]);
    }

    $scope.getCoupleDataForDelete = function(id, title){
        $scope.idBookForDelete = id;
        $scope.dataForDelete.book_title = title;
    }

    $scope.getCoupleDataForUpdate = function(id, title, author, category, content){
        $scope.dataForUpdate.book_id = id
        $scope.dataForUpdate.book_title = title
        $scope.dataForUpdate.book_author = author
        $scope.dataForUpdate.book_category = category
        $scope.dataForUpdate.book_content = content
    }

    $scope.postBook = function(){
        let url = 'http://127.0.0.1:8000/api/book/'
        $http.post(url, JSON.stringify($scope.data)).then(function success(response){
            alert('Success');
            location.reload();
        }, function (response) {
            alert("Fail to add book")            
        })
    }

    $scope.updateBook = function(){
        let url = 'http://127.0.0.1:8000/api/book/' + $scope.dataForUpdate.book_id +'/'
        $http.put(url, JSON.stringify($scope.dataForUpdate)).then(function success(response){
            $scope.loadData
            alert('Success')
            $('#editModal').modal('hide')   
            $scope.books;
            // alert('Success');
            // location.reload();
        }, function (response) {
            alert("Fail to update book")            
        })
    }


    $scope.deleteBook = function(){        
        $http.delete("http://127.0.0.1:8000/api/book/" + $scope.idBookForDelete + "/")
            .then(function (response) {
                alert('Delete Success');
                $('#deleteModal').modal('hide');
                $scope.books;
            }, function (response) {
                alert("Fail to delete book")            
            });
    }

    $scope.hello = function(){
        $("#addBookModal").modal("hide");
    }

})

// app.controller('postCtrl', function($scope, $http){

// })