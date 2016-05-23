// Problem: We need a simple way to look at user's badge count and Javascrip points
// Solution: use NodeJS to connect to Treehouse API to get the profile information to printout
var https = require('https');
var http = require('http');

function printMessage(username, badgeCount, points){
  var message = username + " has " + badgeCount + " and " + points + " points in JavaScript.";
  console.log(message);
}

// Connet to the API URL --> https://teamtreehouse.com/adriendubois.json
  var request = https.get("teamtreehouse.com/adriendubois.json", function(response){
    console.dir(response);
  });

  request.on('error', function(error){
    console.error(error.message);
  });

// Read the data from the response
// Parse the data
// Print the data
