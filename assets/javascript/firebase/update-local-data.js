// If the user is signed in
// Pull user's data from database

// database ref
var database = firebase.database();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        database.ref().on('child_added', function (snapshot) {
            
        });

    };
});
