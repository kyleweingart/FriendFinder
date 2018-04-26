// ===============================================================================
// LOAD DATA
// We are linking our routes to a "data" source.
// This data source hold arrays of information on friends
// ===============================================================================

 var friendData = require("../data/friends.js");


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
    res.json(friendData);
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
    
      friendData.push(req.body);
      res.json(true);
      
    
   
    })
  

  // ---------------------------------------------------------------------------
  
};
