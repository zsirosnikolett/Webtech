$(document).ready(function () {
	$("#addManForm").submit(function (event) {
		event.preventDefault();
		var manJSON = {
			name: $("input[name=name]").val(),
			country: $("input[name=country]").val(),
			founded: $("input[name=founded]").val(),
		};
		console.log(JSON.stringify(manJSON));
		$.ajax({
			type: "POST",
			url: "https://webtechcars.herokuapp.com/api/manufacturers",
			dataType: "application/json",
			data: manJSON,
			success: function () {
				alert("Gyáró hozzáadva!");
			},
		});
	});
});
