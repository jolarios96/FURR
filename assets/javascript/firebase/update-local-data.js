// If the user is signed in
// Pull user's data

// database ref
var userData = firebase.database();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log('display name: ' + user.displayName);
        console.log('email: ' + user.emai);
        console.log('verified? : ' + user.emailVerified);
        console.log('photoURL: ' + 'user.photoURL');
        console.log('uid: ' + user.uid);
        console.log('phone: ' + user.phoneNumber);
        console.log('providerData: ' + user.providerData);
    };
});
