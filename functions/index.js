const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send("hello");
});

exports.setUser = functions.https.onRequest((req, res) => {
  admin
    .auth()
    .createUser({
      email: "walter@example.com",
      emailVerified: false,
      phoneNumber: "+11234567890",
      password: "secretPassword",
      displayName: "Walter White",
      photoURL: "http://www.example.com/12345678/photo.png",
      disabled: false,
    })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully created new user:", userRecord.uid);
      res.send("success");
    })
    .catch((error) => {
      console.log("Error creating new user:", error);
    });
});

exports.getUser = functions.https.onRequest((req, res) => {
  admin
    .auth()
    .getUser('3WKpLfKnZiAK41j5DLBk78Dg2LpX')
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
      res.send(userRecord.toJSON());
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
    });
});
