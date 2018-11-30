var database = firebase.database();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var query = firebase.database().ref("users").orderByKey();
        query.once("value")
            .then(function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    // key will be "ada" the first time and "alan" the second time
                    var key = childSnapshot.key;

                    // childData will be the actual contents of the child

                    var childData = childSnapshot.val();
                    if (user.uid === key) {
                        console.log('key: ' + key);
                        console.log('childData: ' + childData.name);
                        console.log('childData: ' + childData.favorites);
                        console.log('childData: ' + childData.offset);
                    }
                });
            });
    }


});