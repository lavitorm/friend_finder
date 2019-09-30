/* required dependencies */
var friends = require('../data/friends.js');

/* module exports/routes */
module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    /* api/post requests */
    app.post("/api/friends", (req, res) => {
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            Photo: "",
            friendDifference: 1000
        };

        /* convert the scores to a number */
        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var b = userScores.map((item) => {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };

        console.log("Name: " + userName);
        console.log("User Score " + userScores);

        var sum = b.reduce((a, b) => a + b, 0);
        console.log("Sum of users score " + sum);
        console.log("Best match friend diff " + bestMatch.friendDifference);
        console.log("+++++++++++++++++++++++++++++++++++++++++");

        /* for loop that will send all friend possibilities to the db */
        for (var i = 0; i < friends.lenght; i++) {
            console.log(friends[i].name);
            totalDifference = 0;
            console.log("Total Diff " + totalDifference);
            console.log("Best match friend diff " + bestMatch.friendDifference);

            var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total friend score " + bfriendScore);
            totalDifference += Math.abs(sum - bfriendScore);
            console.log("-------------------------------> " + totalDifference);

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
            console.log(totalDifference + " Total Difference");

        }
        console.log(bestMatch);
        friends.push(userData);
        console.log("New User Added");
        console.log(userData);
        res.json(bestMatch);

    });
};