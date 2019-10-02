console.log('API Route Connected!');

/* required dependencies */
var friendsData = require('../data/friends.js');

/* routes */
function apiRoutes(app) {
    /* ("get") api/friends: will display (json) all possible friends */
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });

/* ("post") /api/friends: will handle incoming survey results/compatibility based on newFriend answers */
    app.post('/api/friends', function (req, res) {

/* parse new friend input to a scoreArray */
var newFriend = {
    name: req.body.name,
    photo: req.body.photo,
    scores: []
    };
var scoresArray = [];
for (var i = 0; i < req.body.scores.length; i++) {
    scoresArray.push(parseInt(req.body.scores[i]))
    }
    newFriend.scores = scoresArray;

/* for loop to compare newFriend entry with the existing friends */
var scoreComparisionArray = [];
for (var i = 0; i < friendsData.length; i++) {

/* compare friends scores and sum difference in points */
var currentComparison = 0;
for (var j = 0; j < newFriend.scores.length; j++) {
    currentComparison += Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);
    }

/* push comparisons to scoreComparisionArray */
scoreComparisionArray.push(currentComparison);
}

/* find the best match in the friendsData array */
var bestMatchPosition = 0; /* assume its the first person to start */
for (var i = 1; i < scoreComparisionArray.length; i++) {

/* the lower number is the best match */
if (scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]) {
    bestMatchPosition = i;
    }
}

/* when score is equal, the newest entry in the friendsData array becomes the best match */
var bestFriendMatch = friendsData[bestMatchPosition];

/* jason object reply with the best match */
res.json(bestFriendMatch);

/* "stores" the newFriend to friendsData array */
friendsData.push(newFriend);

});
}

/* exports to file server.js */
module.exports = apiRoutes;