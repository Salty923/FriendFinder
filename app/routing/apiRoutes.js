

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
        console.log("the post api/friends was hit");
        //pushing request body into usertable array in this file.
        thisUser = req.body;
        allFriends.push(thisUser);
        res.send(JSON.stringify(allFriends));
        findFriend();
    });
        
    }


function findFriend() {
    //var allScores =[];
    let score =[];
    let tally = 0;
    //Loop through all user but not the last one which is current user
    for (let i = 0; i < allFriends.length-1; i++) {
        var compareUser = allFriends[i];
        //loop through all of the question and push delta to score
        for (let j = 0; j < 10; j++) {
            let deltas= Math.abs(thisUser.answers[j] - compareUser.answers[j]);
            score.push(deltas);         
        }
            //console.log(score);   
        //add up sum of all 10 deltas in the scores array.
        for (let k = 0; k < 11; k++) {
            tally += score[i];
            //console.log(score[i]);
        }
    allScores.push(tally);
    tally = 0;
    score = [];
    }
    console.log(allScores);
};    


// function lowest() {
//     index = 0;
//     var value = allScores[0];
//     for (var l = 1; l < allScores.length; l++) {
//         if (allScores[l] < value) {
//             value = allScores[l];
//             index = l;
//         }
//     }
// }
