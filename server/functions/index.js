'use strict';

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.calculaPartida = functions.database.ref('/matches/{pushId}/teste').onCreate((snapshot, context) => {
  const original = snapshot.val();
  console.log('Original: ', JSON.stringify(original)); 
  console.log('Uppercasing', context.params.pushId, original);
  const uppercase = original.toUpperCase();
  return snapshot.ref.parent.child('uppercase').set(uppercase);
});