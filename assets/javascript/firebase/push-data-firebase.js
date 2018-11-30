// If the user is signed in
// Push user's data to database

// database ref
var database = firebase.database();
var userRef = database.ref().child('users');

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        var name = user.displayName;
        // var email = user.email;
        var userID = user.uid;

        var offset = sessionStorage.getItem(offset);
        var favorites = (sessionStorage.getItem('favorites'));

        var userData = {
            name: name,
            offset: offset,
            favorites: favorites, // was already stringified in sessionStorage
        };

        userRef.child(userID).set(userData);
    };
});
