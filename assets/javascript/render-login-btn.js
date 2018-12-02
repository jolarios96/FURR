firebase.auth().onAuthStateChanged(function (user) {

    if (!user) {
        //render login link if not logged in
        $('#navbarSupportedContent > ul').prepend(
            $('<li>').addClass('nav-item').append(
                $('<a>').text('- Sign In -').addClass('nav-link').attr('id', 'login-link').attr('href', 'login.html')
            )
        )
    } else {
        // else render logout link
        $('#navbarSupportedContent > ul').append(
            $('<li>').addClass('nav-item').append(
                $('<a>').text('logout').addClass('nav-link').attr('id', 'logoff-link').attr('href', 'index.html')
            )
        )

        if (user.isAnonymous) {
            // and if user isn't anonymous
            $('#navbarSupportedContent > ul').prepend(
                $('<li>').addClass('nav-item').append(
                    $('<a>').text('- Guest -').addClass('nav-link')
                )
            )
        } else {
            //  else, user is not a guest
            $('#navbarSupportedContent > ul').prepend(
                $('<li>').addClass('nav-item').append(
                    $('<a>').text('- ' + user.displayName + ' -').addClass('nav-link')
                )
            )
        }
    }

    // On-Click Events
    $('#login-link').on('click', function () {
        window.location.href = sessionStorage.setItem('cachedPage', window.location.href);
    });

    $('#logoff-link').on('click', function () {
        firebase.auth().signOut();
        sessionStorage.clear();
        localStorage.clear();

        $('#navbarSupportedContent > ul').prepend(
            $('<li>').addClass('nav-item').append(
                $('<a>').text('- Sign In -').addClass('nav-link').attr('id', 'login-link').attr('href', 'login.html')
            )
        );
    });
});