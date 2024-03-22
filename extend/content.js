function autofillCredentials() {
    // Query the DOM for input fields
    const usernameField = document.querySelector('input[type="text"], input[type="email"]');
    const passwordField = document.querySelector('input[type="password"]');

    if (usernameField && passwordField) {
        // Send a message to the background script to request credentials
        chrome.runtime.sendMessage({action: "getCredentials"}, function(response) {
            // Autofill the credentials
            usernameField.value = response.username;
            passwordField.value = response.password;
        });
    }
}

// Trigger autofill when the page loads
window.addEventListener('load', autofillCredentials);
