const vscode = acquireVsCodeApi();
let toolsWindow = undefined;
window.addEventListener('message', messageEvent => {
    if (!toolsWindow) {
        // Find the iframe that contains the devtools
        toolsWindow = document.getElementById('host').contentWindow;
    }
    if (messageEvent.origin === 'vscode-resource://') {
        // Pass the message onto the extension
        vscode.postMessage(messageEvent.data);
    }
    else if (toolsWindow) {
        // Pass the message onto the devtools
        toolsWindow.postMessage(messageEvent.data, '*');
    }
});
//# sourceMappingURL=messaging.js.map