firebase.auth().onAuthStateChanged(function (user) {

    if (!user) {
        $('#navbarSupportedContent > ul').prepend(
            $('<li>').addClass('nav-item').append(
                $('<a>').text('- Login Here -').addClass('nav-link').attr('id', 'login-link').attr('href', 'login.html')
            )
        )
    } else {
        $('#navbarSupportedContent > ul').prepend(
            $('<li>').addClass('nav-item').append(
                $('<a>').text('logout').addClass('nav-link').attr('id', 'logoff-link').attr('href', 'index.html')
            )
        )

        // if user has name
        if (user.displayname) {
            $('#navbarSupportedContent > ul').prepend(
                $('<li>').addClass('nav-item').append(
                    $('<a>').text('- ' + user.displayName + ' -').addClass('nav-link')
                )
            )
        } else {
            $('#navbarSupportedContent > ul').prepend(
                $('<li>').addClass('nav-item').append(
                    $('<a>').text('- Guest -').addClass('nav-link')
                )
            )
        }
    }
    $('#login-link').on('click', function () {
        window.location.href = sessionStorage.setItem('cachedPage', window.location.href);
    });

    $('#logoff-link').on('click', function () {
        firebase.auth().signOut();
        $('#navbarSupportedContent > ul').preend(
            $('<li>').addClass('nav-item').append(
                $('<a>').text('- Login Here-').addClass('nav-link').attr('id', 'login-link').attr('href', 'login.html')
            )
        )
    });
});