// If the user is signed in
// Pull user's data from database

// database ref
var database = firebase.database();

database.ref('users/' + user.uid).on('child_added', function (snapshot) {
    // store the data from firebase
    var name = snapshot.val().name;
    var favorites = snapshot.val().favorites;
    var offset = snapshot.val().snapshot;
    var userID = user.uid;

    // console.log('name: ' + name);
    // console.log('favorites: ' + favorites);
    // console.log('offset: ' + offset);
    // console.log('userID: ' + userID);

    // update session storage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('favorites', JSON.stringify(favorites));
    sessionStorage.setItem('offset', offset);
    sessionStorage.setItem('userID', userID);

});