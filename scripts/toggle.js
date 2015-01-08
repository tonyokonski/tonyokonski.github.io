window.onload = function () {
	var collapse = document.getElementById('navCollapse');
	var nav = document.getElementById('nav');
	//toggle class utility function
	function classToggle(element, tclass) {
		var classes = element.className,
			pattern = new RegExp(tclass);
		var hasClass = pattern.test(classes);
		//toggle the class
		classes = hasClass ? classes.replace(pattern, '') :	classes + ' ' + tclass;
		element.className = classes.trim();
	};
	classToggle(nav, 'hide');
	classToggle(collapse, 'active');
	collapse.onclick = function() {
		classToggle(nav, 'hide');
		return false;
	};
}