var express = require("express");
var app = express();
var PORT = 3000;

var bodyParser = require("body-parser");
var path = require("path");


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

