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
                        localStorage.setItem('name', childData.name);
                        localStorage.setItem('favArray', JSON.stringify(childData.favorites));
                        localStorage.setItem('offset',  childData.offset);
                        localStorage.setItem('userID', user.uid);

                        // sessionStorage.setItem('name', childData.name);
                        // sessionStorage.setItem('favArray', JSON.stringify(childData.favorites));
                        // sessionStorage.setItem('offset', childData.offset);
                        // sessionStorage.setItem('userID', user.uid);

                        // console.logs
                        // console.log('key: ' + key);
                        // console.log('childData: ' + childData.name);
                        // console.log('childData: ' + childData.favorites);
                        // console.log('childData: ' + childData.offset);

                    }
                });
            });
    };

});