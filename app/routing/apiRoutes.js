var friendData = require('../data/friends');

var apiRoutes = function(app){
    app.get('/api/friends', (req, res) => {
        res.json(friendData);
    });

    app.post('/api/friends', (req, res) => {
        res.json(friendData);
    });
}



module.exports = apiRoutes;