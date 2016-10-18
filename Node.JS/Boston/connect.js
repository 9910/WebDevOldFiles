var connect = require("connect");
var http = require("http");

var app = connect();

function doFirst(request, response, next){
  console.log("Slanina1");
  next();
}

function doSecond(request, response, next){
  console.log("Slanina2");
  next();
}

app.use(doFirst);
app.use(doSecond)

http.createServer(app).listen(3000);
