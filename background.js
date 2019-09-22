chrome.tabs.onUpdated.addListener(function(tabId , info) {
	exe()
});

function exe(){
	bg = document.cookie.split("<bg>").pop().split("</bg>").shift()
	fg = document.cookie.split("<fg>").pop().split("</fg>").shift()
	tog = document.cookie.split("<tog>").pop().split("</tog>").shift()
	if(tog == "true"){
		chrome.tabs.insertCSS({code: '::selection{background:' + bg + ';}'})
		chrome.tabs.insertCSS({code: '::selection{color:'+ fg +';}'})
	}
	
}