// Set up the factory
myApp.factory('productsFactory', ['$http', function($http){
  var factory = {};

  // Factory methods
  var products =
  [
    // static products to make development easier.
    { name : "iPhone", price : 4.99, quantity : 50 },
    { name : "Charging cable", price : 1.50, quantity : 50 },
    { name : "Case", price : 110, quantity : 50 },
    { name : "Cheese", price : 11, quantity : 50 }
  ];

  // Add a product
  factory.add = function(product)
  {
    if(product.price && Number(parseFloat(product.price))==product.price)
    {
      // Default quantity to 50 for a new product.
      product.quantity = 50;

      products.push(product);
    }
  };

  // Delete a product
  factory.delete = function(productToDelete)
  {
    // TODO: This should use a callback instead that sets the products
    // dictionary in the controller's $scope.
    console.log("Num prod before: " + products.length);

    for(var i = 0; i < products.length; i++)
    {
        if(productToDelete === products[i])
          products.splice(i, 1);
    }

    // products = products.filter(function(product)
    // {
    //   return product !== productToDelete;
    // });

    console.log("Num prod after: " + products.length);
  };

  factory.buy = function(product, callback)
  {
    for(var i = 0; i < products.length; i++)
    {
        if(product === products[i] && products[i].quantity > 0)
          products[i].quantity--;
    }
    callback(products);
  }

  // Return all products by invoking the callback and passing the product objects.
  factory.index = function(callback)
  {
    callback(products);
  };

  return factory;
}]);
