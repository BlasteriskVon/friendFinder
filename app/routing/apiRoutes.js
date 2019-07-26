var path = require("path");

var friends = require("../data/friends.js");

module.exports = function(app){
    
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    
    app.post("/api/friends", function(req, res){
        var newFriend = req.body;
    
        for(var i = 0;i < newFriend.scores.length;i++){
            var newValue = parseInt(newFriend.scores[i]);
            newFriend.scores[i] = newValue;
        }
    
        var differenceArray = [];
        for(var i = 0;i < friends.length;i++){
            differenceArray[i] = 0;
            for(var j = 0;j < 10;j++){
                differenceArray[i] += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
            }
        } ///finds total differences for every friend (if it works...)
    
    
        var smallestDifference = {
            index: -1,
            value: 999
        }
    
        for(var i = 0;i < differenceArray.length;i++){
            if(differenceArray[i] < smallestDifference.value){
                smallestDifference.index = i;
                smallestDifference.value = differenceArray[i];
            }
        } //finds the smallest amongst them (if it's a tie it'll just take the first one)
    
       
    
        friends.push(newFriend);
    
        res.json(friends[smallestDifference.index]);
    })
    
}