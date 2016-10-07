var express = require("express");
var app = express();
app.get("/", function(request, response){
  console.log("request:");
  console.log(request);
  console.log("\nresponse:")
  console.log(response);

  response.send("Hi there, client");
  console.log("Hello there, Express");

});

app.listen(8000);
