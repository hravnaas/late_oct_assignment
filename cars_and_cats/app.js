// Helper function to avoid repeating code to read file
// and write it to the response object.
function writeFileContentToResponse(response, fileName, contentType)
{
  // TODO: Support other extensions besides jpg.
  var fileEncoding = path.extname(fileName) === ".jpg" ? "" : "utf8";

  // Default content type to text/html
  if(contentType === "undefined")
    contentType = "text/html";

  fs.readFile("." + fileName, fileEncoding, function(errors, contents){
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
  console.log("------ start ------")

  console.log(request.url);
  console.log("base: " +  path.basename(request.url));
  console.log("dirname: " +  path.dirname(request.url));
  console.log("full name:"  + '.'+ path.dirname(request.url)+ '/' + path.basename(request.url));

  console.log("------ end ------");

  switch(request.url)
  {
    case "/cars":
    case "/car":
      writeFileContentToResponse(response, "/views/cars.html");
      break;

    case "/cats":
    case "/cat":
    case "/views/cats.html":
      writeFileContentToResponse(response, "/views/cats.html");
      break;

    case "/cars/new":
    case "/car/new":
      writeFileContentToResponse(response, "/views/newcar.html");
      break;

    case "/images/challenger.jpg":
    case "/images/angry_cat.jpg":
      writeFileContentToResponse(response, request.url, "image/jpg");
      break;

    case "/stylesheets/style.css":
      writeFileContentToResponse(response, "/stylesheets/style.css", "text/css");
      break;

    default:
      response.end("File not found, you 404'er");
  }

})

// Fire up the server and hope for the best.
server.listen(7077);
console.log("Running node server on port 7077");
