var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Present user with survey form.
app.get("/", function(request, response){
  response.render('index');
});

app.post("/result", function(request, response){
    // Parse the POST to get the value the user submitted.
    var form_data = {
      "name" : request.body.name,
      "location" : request.body.location,
      "programming_language" : request.body.programming_language,
      "comment" : request.body.comment
    }

    // Have Express render result.html before returning it to the user.
    response.render('result', { submitted_form: form_data });
})

// Run that server!
app.listen(8000);
