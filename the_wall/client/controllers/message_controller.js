app.controller('messageController',
  ['$scope',
  'messagesFactory',
  '$location',
  'usersFactory',
  function($scope, messagesFactory, $location, usersFactory)
  {
    $scope.sortType = "createdAt";
    $scope.sortReverse = true;
    $scope.messages = [];
    $scope.message = {};
    $scope.user = null;

    var index = function()
    {
      messagesFactory.index(function(returnedData)
      {
        $scope.messages = returnedData;
      });
    };

    // Create a new message.
    $scope.new = function()
    {
      if($scope.message.text)
      {
        $scope.message.userID = $scope.user._id;
        messagesFactory.new($scope.message, function(returnedData)
        {
          $scope.message = {};
          index();
        });
      }
      else
        $location.url("/messages/new");
    };

    // Add a comment to a message.
    $scope.comment = function(msgID)
    {
      $scope.newComment.msgID = msgID;
      $scope.newComment.userID = $scope.user._id;
      messagesFactory.comment($scope.newComment, function(returnedData)
      {
        $scope.newComment = {};
        index();
      });
    };

    // Logs out the current user.
    $scope.logout = function()
    {
      usersFactory.logout(function(user)
      {
        $scope.user = user;
        $location.url('/messages/login');
      });
    };

    // Check if user is logged in when controller loads.
    // If so, show the index page. If not, redirect to login.
    usersFactory.getLoggedInUser(function(result)
    {
      $scope.user = result.user;
      if(!$scope.user)
        $location.url("/messages/login");
      else
        // Get all messages when the controllers loads
        // after the user is logged in.
        index();
    });
  }]);
