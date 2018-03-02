

var usertable =[];
var friendData = require('../data/friends');

module.exports = function(app){
    app.get('/api/friends', (req, res) => {
        res.json(friendData);
    });

    app.post('/api/friends', (req, res) => {
        //pushing request body into usertable array in this file.
        usertable.push(req.body);

        res.json(usertable);
    });


    app.post('/api/friends', (req, res) => {
        friendData.push(req.body);
        res.json(true);
    });

    //add logic here..
    

}



