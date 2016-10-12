// Set up the orders controller.
// Note that it's using the same factory as the productsController, the productsFactory.
myApp.controller('ordersController', ['$scope', 'productsFactory', function ($scope, productsFactory)
{
    $scope.products = [];
    productsFactory.index(function(products)
    {
        $scope.products = products;
    });

    // Buy a product.
    $scope.buy = function(product)
    {
      // Call the factory function to buy the product.
      productsFactory.buy(product, function(products){
        // Update products in $scope.
        $scope.products = products;
      });
    }

    // Set up sorting
    $scope.sortType = 'name';
    $scope.sortReverse = false;
}]);
