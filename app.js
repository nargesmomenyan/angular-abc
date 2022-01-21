var express = require("express");
var app = express();
var server = require("http").Server(app);
var bodyParser = require("body-parser");

server.listen(process.env.PORT || 9999, function listeningListener() {
  console.log(
    `server connected. Listening on port: ${process.env.PORT || 9999} `
  );
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "front"));
app.get("/test", function (req, res) {
  return res.send("myTestVar");
});

app.get("/*", function (req, res, next) {
  console.log("Reloading...", __dirname);
  res.sendFile("/front/index.html", { root: __dirname });
});
