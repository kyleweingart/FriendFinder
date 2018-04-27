// ===============================================================================
// LOAD DATA
// We are linking our routes to a "data" source.
// This data source hold arrays of information on friends
// ===============================================================================

 var friends = require("../data/friends.js");
 var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In the below case, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the friends JavaScript array
  // (ex. User fills out a friend survey... this data is then sent to the server...
  // Then the server saves the data to the friendData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know who there best friend match is.
    // req.body is available since we're using the body-parser middleware



      
      
      var bestMatch = {
        name: "",
        image: "",
        matchDifference:500
      };
      var userData = (req.body);
      var userName = userData.name;
      var userImage = userData.image;
      // need to work on user scores - var is undefined
      var userScores = userData.score;
      var totalDifference;

      for (var i = 0; i < friends.length; i++){
          console.log(friends[i].name);
          totalDifference = 0;
          console.log(totalDifference);

          for (var j = 0; j < 10; j++) {
            console.log("we here");
            console.log(parseInt(friends[i].scores[j]));
            // console.log(parseInt(userScores[j]));
            console.log(userScores);
            // totalDifference += Math.abs(parseInt(userScores)- parseInt(friends[i].scores[j]));
            // console.log(totalDifference);
            // if (totalDifference <= bestMatch.matchDifference){
            //   bestMatch.name = friends[i].name;
            //   bestMatch.image = friends[i].image;
            //   bestMatch.matchDifference = totalDifference;
            //   console.log(totalDifference);
          // }
          }

          if (totalDifference <= bestMatch.matchDifference){

            console.log("we getting there");
            //   bestMatch.name = friends[i].name;
            //   bestMatch.image = friends[i].image;
            //   bestMatch.matchDifference = totalDifference;
            //   console.log(totalDifference);
          // }
          }
      }

      
      
      
      
      friends.push(userData);

      // friendData.push(bestMatch);

      res.json(bestMatch);
      
    
   
    });
  

  // ---------------------------------------------------------------------------
  
};
