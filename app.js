// Problem: We need a simple way to look at user's badge count and Javascrip points
// Solution: use NodeJS to connect to Treehouse API to get the profile information to printout
var https = require('https');
var http = require('http');

function printMessage(username, badgeCount, points){
  var message = username + " has " + badgeCount + " and " + points + " points in JavaScript.";
  console.log(message);
}

// Connect to the API URL --> https://teamtreehouse.com/adriendubois.json
var request = https.get("https://teamtreehouse.com/adriendubois.json", function(response){
  var body = '';

// Read the data
  response.on('data', function(chunk){
    body += chunk;
  });
  response.on('end', function(){
    console.log(body);
  });

// Parse the data
// Print the data

});

request.on('error', function(error){
  console.error(error.message);
});

