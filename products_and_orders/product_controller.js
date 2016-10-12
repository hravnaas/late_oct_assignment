// Set up the controller.
myApp.controller('productsController', ['$scope', 'productsFactory', function ($scope, productsFactory)
{
    $scope.products = [];
    productsFactory.index(function(products)
    {
        $scope.products = products;
    });

    $scope.addProduct = function()
    {
      // Call the factory function to add the product.
      productsFactory.add($scope.newProduct);
    }

    $scope.deleteProduct = function(product)
    {
      // Call the factory function to add the product.
      productsFactory.delete(product);
    }

    // Set up sorting
    $scope.sortType = 'name';
    $scope.sortReverse = false;
}]);
