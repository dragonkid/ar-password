chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "getCredentials") {
        // Retrieve credentials securely, possibly from a remote server or encrypted local storage
        sendResponse({ username: "user@example.com", password: "password123" });
    }
});
