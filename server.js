var express = require("express");
var app = express();
var PORT = 3000;
var bodyParser = require("body-parser");
var path = require("path");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// var router = require('./routing/htmlRoutes');
// var api = require('./routing/apiRoutes');


require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

