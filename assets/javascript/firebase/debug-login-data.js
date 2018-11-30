
initApp = function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            console.log('display name: ' + user.displayName);
            console.log('email: ' + user.email);
            console.log('verified? : ' + user.emailVerified);
            console.log('photoURL: ' + 'user.photoURL');
            console.log('uid: ' + user.uid);
            console.log('phone: ' + user.phoneNumber);
            console.log('providerData: ' + user.providerData);
        };
    });
};

window.addEventListener('load', function () {
    initApp();
});