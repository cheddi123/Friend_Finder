
var friendsData = require("../data/friends")

 
console.log(friendsData)
module.exports = function (app) {

    // Get a total of friends entries
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
       
    });

    // post new entry of friend
    app.post("/api/friends", function (req, res) {
        

        //gets access friends list data
        var userArray = req.body;
        var userResponse = userArray.scores

        var matchName = '';
        var matchImage = '';

        var limitDiff = 60;
      

        for (var i = 0; i < friendsData.length; i++) {
            var difference = 0;

            for (var j = 0; j < userResponse.length; j++) {

                difference += Math.abs(friendsData[i].scores[j] - userResponse[j]);
            }

            

            if (difference <= limitDiff) {
                limitDiff = difference;
                matchName = friendsData[i].name;
                matchImage = friendsData[i].photo;
             console.log("the diffenrece is : " + difference)
            }
            console.log("your best match is " + matchName)
            console.log("The image is  " + matchImage)
        }

       //push new friend data into friends array
        friendsData.push(userArray);

 // after matching , send this data to the client in modal display
           res.json({
            status:"ok",
           name : matchName, 
          photo :matchImage
         });

    });

};