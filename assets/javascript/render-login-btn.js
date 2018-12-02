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
                $('<a>').text('logout').addClass('nav-link').attr('id', 'logoff-link').attr('href', 'index.html')
            )
        )
        
        // Is User Anonymous?
        if (user.isAnonymous) {
            // is user anonymous? (guest)
            $('#navbarSupportedContent > ul').prepend(
                $('<li>').addClass('nav-item tmp-container').append(
                    $('<a>').text('- Guest -').addClass('nav-link')
                )
            )
        } else {
            //  else, user is not a guest
            $('#navbarSupportedContent > ul').prepend(
                $('<li>').addClass('nav-item tmp-container').append(
                    $('<a>').text('- ' + user.displayName + ' -').addClass('nav-link')
                )
            )
        }
    }

    // On-Click Events
    var database = firebase.database();

    $('#login-link').on('click', function () {
        window.location.href = sessionStorage.setItem('cachedPage', window.location.href);
    });

    $('#logoff-link').on('click', function () {
        if (user.isAnonymous){
            // removes data from database if anonymous user
            database.ref().child('/users/' + user.uid).remove();
        }
        
        firebase.auth().signOut();
        sessionStorage.clear();
        localStorage.clear();

        $('#navbarSupportedContent > ul').prepend(
            $('<li>').addClass('nav-item').append(
                $('<a>').text('- Sign In -').addClass('nav-link').attr('id', 'login-link').attr('href', 'login.html')
            )
        );
        $('.tmp-container').remove();    
    });
});