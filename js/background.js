(function() {

	chrome.webNavigation.onHistoryStateUpdated.addListener(details => {
		if(details.frameId === 0) {
			chrome.tabs.sendMessage( details.tabId, {action: 'locationChange'} );
		}
	});

}());
