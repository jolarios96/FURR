// If the user is signed in
// Push user's data to session

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        var name = user.displayName;
        var userID = user.uid;
        var favorites = sessionStorage.getItem(favArray);
        var offset = sessionStorage.getItem(offset); // equals user's last offset

        sessionStorage.setItem('name', name);
        sessionStorage.setItem('favArray', JSON.stringify(favorites));
        sessionStorage.setItem('offset', offset);
        sessionStorage.setItem('userID', userID)
    };
});
