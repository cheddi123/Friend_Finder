
var friendsData = require("../data/friends")
var path =require("path")

console.log(friendsData)

module.exports=function(app){

    // Get a total of friends entries
app.get("/api/friends", function(req, res) {
   res.json(friendsData);
  });

  // post new entry of friend
  app.post("/api/friends", function(req, res) {
      friendsData.push(req.body);
      res.json(true);
     
      //gets access friends list data
    var  userArray= req.body;
    var userResponse = userArray.scores 

     var difference =0;
      
      for(var i =0;i<friendsData.length;i++){
              
          for(var j=0;j<userResponse.length;j++){
              
               difference += Math.abs(friendsData[i].scores[j] -userResponse[j] )
              
          }
            
             console.log("the diffenrece is : " + difference)
      }

          
  
    // res.json(friendsData);



  });

  // clear out the info array after submitting
  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsData.length = [];
   

    res.json({ ok: true });
  });


  }