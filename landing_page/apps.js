// Helper function to avoid repeating code to read file
// and write it to the response object.
function writeFileContentToResponse(response, fileName, contentType)
{
  // TODO: Support other extensions besides jpg.
  var fileEncoding = path.extname(fileName) === ".jpg" ? "" : "utf8";

  // Default content type to text/html
  if(contentType === "undefined")
    contentType = "text/html";

  fs.readFile(fileName, fileEncoding, function(errors, contents){
    response.writeHead(200, { "Content-Type": contentType });
    response.write(contents);
    response.end();
  })
}

// Define what the server can handle.
var path = require("path")
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response){
  console.log(request.url);

  switch(request.url)
  {
    case "/":
    case "/index.html":
      writeFileContentToResponse(response, "index.html");
    break;

    case "/dojos/new":
    case "/dojos.html":
      writeFileContentToResponse(response, "dojos.html");y
    break;

    case "/ninjas":
    case "/ninjas.html":
      writeFileContentToResponse(response, "ninjas.html");
    break;

    default:
      response.end("File not found, you 404'er");
  }

})

// Fire up the server.
server.listen(6789);
console.log("Running node server on port6789");
