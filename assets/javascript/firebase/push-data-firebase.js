// If the user is signed in
// Push user's data to database

var database = firebase.database();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        // get data fromlocalStorage
        var offset = localStorage.getItem('offset');
        var favorites = localStorage.getItem('favorites'); // was already stringified in localStorage

        // var offset = sessionStorage.getItem('offset');
        // var favorites = sessionStorage.getItem('favorites'); // was already stringified in sessionStorage

        var userData = {
            name: user.displayName,
            offset: offset,
            favorites: favorites, // was already stringified in local/session Storage
            userID: user.uid,
        };

        database.ref().child('/users/' + user.uid).set(userData);
    }
});
