// If the user is signed in
// Push user's data to database

var database = firebase.database();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        // get data from localStorage
        var offset = localStorage.getItem('offset');
        var favorites = localStorage.getItem('favorites'); // was already stringified in localStorage

        // compile data into object
        var userData = {
            name: user.displayName,
            offset: offset,
            favorites: favorites, // no stringify, was initially declared as string
            userID: user.uid,
        };

        // send data to database
        database.ref().child('/users/' + user.uid).set(userData);
    };
});
