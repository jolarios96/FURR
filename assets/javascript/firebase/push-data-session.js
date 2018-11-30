// If the user is signed in
// Push user's data to session

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        var name = user.displayName;
        // var email = user.email;
        var userID = user.uid;
        var favorites = [0, 1, 2];

        sessionStorage.setItem('name', name);
        // sessionStorage.setItem('email', email);
        sessionStorage.setItem('userID', userID);
        sessionStorage.setItem('favorites', JSON.stringify(favorites));
        sessionStorage.setItem('offset', 0);
    };
});
