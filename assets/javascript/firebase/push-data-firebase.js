// If the user is signed in
// Push user's data to database

var database = firebase.database();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        var name = user.displayName;
        var userID = user.uid;

        // get data fromlocalStorage
        var offset = sessionStorage.getItem('offset');
        var favorites = sessionStorage.getItem('favorites'); // was already stringified in sessionStorage

        var userData = {
            name: name,
            offset: offset,
            favorites: favorites, // was already stringified in sessionStorage
            userID: userID,
        };

        database.ref().child('/users/' + userID).set(userData);
    }
});


