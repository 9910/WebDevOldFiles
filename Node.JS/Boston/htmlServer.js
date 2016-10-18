var fs = require("fs");
var http = require("http");

function send404(response) {
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("Error 404 page not found");
  response.end();
}

function onRequest(request, response) {
  if (request.method == "GET" && request.url == "/"){
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("./index.html").pipe(response);
  } else {
    send404(response);
  }
}

http.createServer(onRequest).listen(3000);
console.log("Server is running...");
