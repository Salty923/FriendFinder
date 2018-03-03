

var thisUser;
var match;
var allFriends = require('../data/friends');


module.exports = function(app){
    //Shows user data at this url
    app.get('/api/friends', (req, res) => {
        res.json(allFriends);
    });


    app.post('/api/friends', (req, res) => {
        console.log("the post api/friends was hit");
        //pushing request body into usertable array in this file.
        thisUser = req.body;
        console.log(thisUser); 
        allFriends.push(thisUser);
        res.send(JSON.stringify(allFriends));
        
    });



    //add logic here..
    //for loop   this.User answers check
    // for (let i = 0; i < allFriends.length; i++) {
    //     thisUser.answer[i]
        
    // }
    

}



