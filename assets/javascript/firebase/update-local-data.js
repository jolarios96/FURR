// If the user is signed in
// Pull user's data from database

// database ref
var database = firebase.database();

database.ref('users/').on('child_added', function (snapshot) {
    // store the data @ firebase
    var name = snapshot.val().name;
    var favorites = snapshot.val().favorites;
    var offset = snapshot.val().snapshot;

    console.log('name: ' + name);
    console.log('favorites: ' + favorites);
    console.log('offset: ' + offset);

    // update session storage
    sessionStorage.getItem('name', name);
    sessionStorage.getItem('favorites', JSON.stringify(favorites));
    sessionStorage.getItem('offset', offset);
});