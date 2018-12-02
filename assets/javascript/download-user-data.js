var database = firebase.database();

firebase.auth().onAuthStateChanged(function (user) {

    if (user) {
        var query = firebase.database().ref("users").orderByKey();
        query.once("value")
            .then(function (snapshot) {
                var existence;
                snapshot.forEach(function (childSnapshot) {
                    var key = childSnapshot.key;

                    // childData will be the actual contents of the child
                    var childData = childSnapshot.val();
                    // if current user's id matches the snapshot's data key


                    if (user.uid === key) {
                        // store server data in localStorage
                        // NOTE: array data from server is already stringified
                        localStorage.setItem('name', childData.name);
                        localStorage.setItem('favArray', childData.favorites);
                        localStorage.setItem('offset', childData.offset);
                        localStorage.setItem('userID', user.uid);

                        // console.logs
                        console.log('key: ' + key);
                        console.log('name: ' + childData.name);
                        console.log('favorites: ' + childData.favorites);
                        console.log('offset: ' + childData.offset);

                        existence = true;
                    }

                });
                if (!existence) {
                    // user has no data.

                    // set initial data locally
                    var offset = 0;
                    var favorites = '[]';

                    localStorage.setItem('name', user.displayName);
                    // localStorage.setItem('favArray', childData.favorites);
                    localStorage.setItem('offset', 0);
                    localStorage.setItem('userID', user.uid);

                    var userData = {
                        name: user.displayName,
                        offset: offset,
                        favorites: favorites, // was already stringified in local/session Storage
                        userID: user.uid,
                    };

                    database.ref().child('/users/' + user.uid).set(userData);
                }
            });
    };

});