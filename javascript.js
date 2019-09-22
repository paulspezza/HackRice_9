var bg
var fg
var tog

window.onload = function(){
	bg = document.cookie.split("<bg>").pop().split("</bg>").shift()
	fg = document.cookie.split("<fg>").pop().split("</fg>").shift()
	tog = document.cookie.split("<tog>").pop().split("</tog>").shift()
	var t1 = document.getElementById('t1');
	var t2 = document.getElementById('t2');
	var b1 = document.getElementById('b1');
	var b2 = document.getElementById('b2');
	var b3 = document.getElementById('b3');
	var b4 = document.getElementById('b4');
	var enabled = document.getElementById('enabled');
	var demo = document.getElementById('demo');	
	b1.value = bg
	t1.color = bg
	b2.value = fg
	t2.color = fg
	demo.style.background = bg
	demo.style.color = fg
	if(tog == "true"){
		b3.checked = true
	}else{
		b3.checked = false 
	}
	b4.onclick = function() {
		save()
	};
};

function save(){
	document.cookie = "<bg>" + b1.value + "</bg>"
	document.cookie = document.cookie + "<fg>" + b2.value + "</fg>"
	document.cookie = document.cookie + "<tog>" + b3.checked + "</tog>"
	bg = document.cookie.split("<bg>").pop().split("</bg>").shift()
	fg = document.cookie.split("<fg>").pop().split("</fg>").shift()
	tog = document.cookie.split("<tog>").pop().split("</tog>").shift()
	t1.color = bg
	t2.color = fg
	demo.style.background = bg
	demo.style.color = fg
	if (tog == "false"){
		alert("You may need to refresh the current page for the changes to be applied")
	}
	bPage();
	
	
	
}

function bPage(){
	var bgPage = chrome.extension.getBackgroundPage();
	bgPage.exe();
}