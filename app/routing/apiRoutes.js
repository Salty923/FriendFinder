

var match;
var allFriends = require('../data/friends');
var thisUser;
var allScores =[];
var index;

module.exports = function(app){
    //Shows user data at this url
    app.get('/api/friends', (req, res) => {
        res.json(allFriends);
    });


    app.post('/api/friends', (req, res) => {
        //console.log("the post api/friends was hit");
        //pushing request body into usertable array in this file.
        thisUser = req.body;
        allFriends.push(thisUser);
        findFriend();
        res.send(JSON.stringify(match));
    });
        
    }


function findFriend() {
    //var allScores =[];
    let score =[];
    let tally = 0;
    let delta;
    //Loop through all user but not the last one which is current user
    for (let i = 0; i < allFriends.length-1; i++) {
        var compareUser = allFriends[i];
        //loop through all of the question and push delta to score
        for (let j = 0; j < 10; j++) {
            delta= Math.abs(thisUser.answers[j] - compareUser.answers[j]);
            tally += delta;         
        }
    allScores.push(tally);
    //console.log(tally);
    tally = 0;
    }
    lowest();
};    


//Find lowest score to match friends
function lowest() {
    index = 0;
    var value = allScores[0];
    //Use -1 to not select user submitting
    for (var l = 0; l < allScores.length -1; l++) {
        if (allScores[l] < value) {
            value = allScores[l];
            index = l;
        }
    }
    match = allFriends[index];
    //console.log(`Use ${index} index for the match`);
    //console.log(match);
    
}
