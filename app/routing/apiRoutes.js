var friendData = require('../data/friends');

module.exports = function(app){
    app.get('/api/friends', (req, res) => {
        res.json(friendData);
    });

    app.post('/api/friends', (req, res) => {
        res.json(friendData);
    });
}



