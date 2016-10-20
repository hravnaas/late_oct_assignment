

app.factory('questionsFactory', ['$http', function($http)
{
  var questions = [];
  var question = {};

  function QuestionsFactory()
  {
    var _this = this;

    // Get all the questions.
    this.index = function(callback)
    {
      $http.get('/qa/question')
        .then(function(returned_data)
        {
          questions = returned_data.data.questions;
          callback(questions);
        });
    };

    // Get one question.
    this.getQuestion = function(questionID, callback)
    {
      $http.get('/qa/question/' + questionID)
        .then(function(returned_data)
        {
          question = returned_data.data.question;
          callback(question);
        });
    };

    // Add a new question.
    this.create = function(newQuestion, callback)
    {
      $http.post('/qa/question', newQuestion)
        .then(function(returned_data)
        {
          if(returned_data.data.errors)
          {
            callback({ errors : returned_data.data.errors });
          }
          else
          {
            question = returned_data.data.question;
            if(typeof(callback) == 'function')
            {
              callback({ question : question });
            }
          }
      });
    };

    // Update an existing friend.
    this.update = function(friend, callback)
    {
      $http.put('/friends/' + friend._id, friend)
        .then(function(returned_data)
        {
          if(typeof(callback) == 'function')
          {
            callback(returned_data.data.friend);
          }
      });
    };

    // Delete a friend.
    this.delete = function(id, callback)
    {
      $http.delete('/friends/' + id)
        .then(function(returned_data)
        {
          if(typeof(callback) == 'function')
          {
            callback(returned_data.data);
          }
      });
    };

    // Get the specified friend.
    this.show = function(_id)
    {
      $http.get('/friends/' + _id)
        .then(function(returned_data)
        {
          friend = returned_data.data.friend;
          callback(friend);
        });
    };

    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback)
    {
      callback(friends);
    };

    // Get the friend with the specified ID.
    this.getFriend = function(_id, callback)
    {
      friend = null;
      for(var i = 0; i < friends.length; i++)
      {
        if(friends[i]._id === _id)
        {
          friend = friends[i];
          break;
        }
      }

      callback(friend);
    };
  }

  return new QuestionsFactory();
}]);
