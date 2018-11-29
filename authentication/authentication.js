// firebase initialization
var config = {
    apiKey: "AIzaSyDzixpXHU87uZ_gbAfy6YP3btwUVek9rWw",
    authDomain: "project-furr.firebaseapp.com",
    databaseURL: "https://project-furr.firebaseio.com",
    projectId: "project-furr",
    storageBucket: "project-furr.appspot.com",
    messagingSenderId: "654872510123"
};
firebase.initializeApp(config);
// --------------------------------------------------------------

// database references
var database = firebase.database();
var user = firebase.auth().currentUser;

