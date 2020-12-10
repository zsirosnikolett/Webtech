$(document).ready(function () {
	$("#oldaltartalma").load("home.html");
	$.each($(".menuItem"), function (mbIndex, mbValue) {
		$(mbValue).click(function (event) {
			event.preventDefault();
			$("#oldaltartalma").load($(this).attr("href"));
		});
	});
});
