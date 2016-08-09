var express = require('express');
var env = require('.env')
var publicKey = process.env.PUBLIC_KEY
var secretKey = process.env.SECRET_KEY

var traitify = require('traitify');
  traitify.setHost("https://api-sandbox.traitify.com");
  traitify.setVersion("v1");
  traitify.setSecretKey(secretKey);

var deckId = "Your Deck Id";
  traitify.createAssessment(deckId, function(assessment){
  // Use assessment here.
  console.log(assessment);
});

// How to generate a new assesment id on load.
// setup express server
// set env variable for secret key
// Setup ajax call after the index page renders to get the new assement ID. You'll
//  likely need to parse it and assign the assemenet id to a variable that can be
//  input into the script below.


//   traitify.setHost("https://api-sandbox.traitify.com");
//   traitify.setVersion("v1");
//   traitify.setSecretKey("r6redimhllt4snco61rr5g9mk5");

      // Traitify.setPublicKey('519okkqomh8n81luoda2felchp');
      // Traitify.setHost("https://api-sandbox.traitify.com");
      // Traitify.setVersion("v1");
      // var assessmentId = '8c37871b-0a1e-44dc-b768-f76a1bc14fe1';
      // Traitify.ui.load(assessmentId, ".assessment")

