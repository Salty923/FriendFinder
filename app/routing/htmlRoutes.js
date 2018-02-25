var path = require('path');

var routes = function(app){
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname,"../public/home.html"));
    });

    app.get('*', function(req,res){
        res.sendFile(path.join(__dirname,'../public/home.html'));
    });
};

module.exports = routes;