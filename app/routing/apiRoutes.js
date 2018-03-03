



var friendData = require('../data/friends');
var userTable =[];

module.exports = function(app){
    //Shows user data at this url
    app.get('/api/friends', (req, res) => {
        res.json(friendData);
    });


    app.post('/api/friends', (req, res) => {
        console.log("this api was hit");
        //pushing request body into usertable array in this file.
        userTable.push(req.body);
        res.send(JSON.stringify(userTable));  
 

    });

    //add logic here..
    

}



