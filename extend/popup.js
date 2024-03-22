document.getElementById('autofill').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs.length === 0) {
            console.error('No active tabs found.');
            return;
        }

        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: autofillCredentials
        });
    });
});
