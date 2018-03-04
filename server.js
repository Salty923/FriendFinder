var express = require("express");
var app = express();
var PORT = process.env.PORT || 3001;

//Use the express statc middlw ware to server static content for the app from the "public directory";
app.use(express.static('app/public'));

var bodyParser = require("body-parser");
var path = require("path");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

