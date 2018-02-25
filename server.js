var express = require("express");
var app = express();
var PORT = 3000;
var bodyParser = require("body-parser");
var path = require("path");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

