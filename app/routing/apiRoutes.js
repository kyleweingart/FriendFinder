// ===============================================================================
// LOAD DATA

// ===============================================================================

 var friends = require("../data/friends.js");
 var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  

  // API POST Requests
  
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
  //  logic to find best friend match



    
      
      var bestMatch = {
        name: "",
        photo: "",
        matchDifference:500
      };
      var userData = (req.body);
      var userName = userData.name;
      var userPhoto = userData.photo;
      var userScores = userData.scores;
      var totalDifference;

      for (var i = 0; i < friends.length; i++){
          console.log(friends[i].name);
          totalDifference = 0;
          for (var j = 0; j < 10; j++) {
            
            totalDifference += Math.abs(parseInt(userScores[j])- parseInt(friends[i].scores[j]));
            
            
          }
          if (totalDifference <= bestMatch.matchDifference){
            bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.matchDifference = totalDifference;
            console.log(bestMatch);

          }

          
      }

      
      
      
      
      friends.push(userData);

      

      res.json(bestMatch);
      
    
   
    });
  

  // ---------------------------------------------------------------------------
  
};
