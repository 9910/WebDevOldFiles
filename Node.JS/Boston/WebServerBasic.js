var http = require("http");

function onRequest(request, response) {
  console.log("User request " + request.url);
  response.writeHead(200, {"Context-Type": "text/plain"});
  response.write("Ok");
  response.end();
}

http.createServer(onRequest).listen(3000);
console.log("Server is running...");
