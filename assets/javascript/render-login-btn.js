firebase.auth().onAuthStateChanged(function (user) {
    $('.tmp-container').remove();
    // is user logged in?
    if (!user) {
        //render login link if not logged in
        $('#navbarSupportedContent > ul').prepend(
            $('<li>').addClass('nav-item tmp-container').append(
                $('<a>').text('- Sign In -').addClass('nav-link').attr('id', 'login-link').attr('href', 'login.html')
            )
        )
    } else {
        // else render logout link
        $('#navbarSupportedContent > ul').append(
            $('<li>').addClass('nav-item tmp-container').append(
                $('<a>').text('logout').addClass('nav-link').attr('id', 'logout-link').attr('href', 'index.html')
            )
        )

        // Is User Anonymous?
        if (user.isAnonymous) {
            // prepend -  Guest  - on header as visual sign-in confirmation
            $('#navbarSupportedContent > ul').prepend(
                $('<li>').addClass('nav-item tmp-container').append(
                    $('<a>').text('- Guest -').addClass('nav-link')
                )
            )
        } else {
            //  else, user has account
            //  prepend user's display name as visual sign-in confirmation
            $('#navbarSupportedContent > ul').prepend(
                $('<li>').addClass('nav-item tmp-container').append(
                    $('<a>').text('- ' + user.displayName + ' -').addClass('nav-link')
                )
            )
        };
    };

    // On-Click Events
    var database = firebase.database();

    $('#login-link').on('click', function () {
        // change the url to the last page saved to cachedPage
        window.location.href = sessionStorage.setItem('cachedPage', window.location.href);
    });

    $('#logout-link').on('click', function () {
        if (user.isAnonymous) {
            // removes data from database of Guest user
            database.ref().child('/users/' + user.uid).remove();
        } else {
            var userData = {
                name: user.displayName,
                offset: localStorage.getItem('offset'),
                favorites: localStorage.getItem('favArray'), // no stringify, was initially declared as string
                userID: user.uid,
            };

            // send data to database
            database.ref().child('/users/' + user.uid).set(userData);
        }

        // sign out user
        firebase.auth().signOut();

        // clear session storage of user data
        sessionStorage.clear();

        // clear local storage of user data
        localStorage.clear();

        // removes login/logout items from nav to prevent
        // render problems in cross-tab sessions
        $('.tmp-container').remove();

        // re-renders Sign In header item
        $('#navbarSupportedContent > ul').prepend(
            $('<li>').addClass('nav-item').append(
                $('<a>').text('- Sign In -').addClass('nav-link').attr('id', 'login-link').attr('href', 'login.html')
            )
        );
    });
});