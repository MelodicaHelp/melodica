var nav = document.getElementById('nav');

windows.onscroll = function () {
	if(windows.YOffset > 100){
		nav.style.position = "fixed";
		nav.style.top = 0;
	} else {
		nav.style.position = "absolute";
		nav.style.top = 100;
	}
}