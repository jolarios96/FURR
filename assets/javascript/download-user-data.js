var database = firebase.database();

firebase.auth().onAuthStateChanged(function (user) {

    if (user) {
        var query = firebase.database().ref("users").orderByKey();
        query.once("value")
            .then(function (snapshot) {
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

                    }
                });
            });
    };

});