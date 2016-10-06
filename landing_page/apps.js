function writeFileContentToResponse(response, fileName)
{
  fs.readFile(fileName, "utf8", function(errors, contents){
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(contents);
    response.end();
  })
}

var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request, response){
  console.log(request.url);

  switch(request.url)
  {
    case "/":
    case "/index.html":
      fs.readFile('index.html')
    break;

    case "/dojos/new":
    case "/dojos.html":
    break;

    case "/ninjas":
    case "/ninjas.html":
    break;

    default:
  }

})
