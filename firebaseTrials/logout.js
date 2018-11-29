
// Attach this js to any page with a log-out button
document.getElementById('sign-out').addEventListener('click', function () {
    
    // sign out
    firebase.auth().signOut();

    // clear local data code here
    localStorage.clear();

    // refresh the webpage
    location.reload;
});