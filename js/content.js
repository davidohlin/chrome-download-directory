(function() {

	function createButton() {
		const buttons = document.querySelector('.BtnGroup.float-right');
		const isSubfolder = document.querySelector('.up-tree') !== null;
		const buttonExists = document.querySelector('#chrome-dd-button') !== null;
		
		if (isSubfolder && !buttonExists) {
			const button = document.createElement('a');
	
			button.id = 'chrome-dd-button';
			button.classList = 'btn btn-sm BtnGroup-item'
			button.innerText = 'Download folder';
			button.href = `https://download-directory.github.io?url=${window.location.href}`;
	
			buttons.append(button);
		}
	}

	createButton();

	chrome.runtime.onMessage.addListener(data => {
		if (data.action === 'locationChange') {
			createButton();
		}
	});
	
}());