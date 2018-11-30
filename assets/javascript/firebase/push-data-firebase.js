// If the user is signed in
// Push user's data to database

var database = firebase.database();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        var name = user.displayName;
        var userId = user.uid;

        // get data fromlocalStorage
        var offset = sessionStorage.getItem('offset');
        var favorites = sessionStorage.getItem('favorites'); // was already stringified in sessionStorage

        var userData = {
            name: name,
            offset: offset,
            favorites: favorites, // was already stringified in sessionStorage
        };

        database.ref().child('/users/' + userId).set(userData);
    }
    else {
        // else use localStorage for data
        var name = user.displayName;
        var favorites = sessionStorage.getItem('favorites'); // was already stringified in sessionStorage
        var offset = sessionStorage.getItem('offset');

       localStorage.setItem('name', name);
       localStorage.setItem('favorites', favorites);
       localStorage.setItem('offset', 0);
    }
});
