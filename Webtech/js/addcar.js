$(document).ready(function () {
	$.get(
		"https://webtechcars.herokuapp.com/api/manufacturers",
		function (manufacturers) {
			var manselect = $("#man-select");

			for (let index = 0; index < manufacturers.length; index++) {
				var option = document.createElement("option");
				option.innerHTML = manufacturers[index].name;
				option.setAttribute("value", manufacturers[index].name);
				manselect.append(option);
			}
		}
	);
});

$("#addCarForm").submit(function (event) {
	event.preventDefault();
	var carJSON = {
		name: $("input[name=name]").val(),
		consumption: $("input[name=consumption]").val(),
		color: $("input[name=color]").val(),
		manufacturer: $("select[name=manufacturer]").val(),
		year: $("input[name=year]").val(),
		avaiable: $("input[name=available]").val(),
		horsepower: $("input[name=horsepower]").val(),
	};
	console.log(carJSON);
	$.ajax({
		type: "POST",
		url: "https://webtechcars.herokuapp.com/api/cars",
		data: carJSON,
		headers: { "Access-Control-Allow-Origin": "*" },
		success: function () {
			alert("Autó hozzáadva!");
		},
		error: function () {
			alert("error");
		},
	});
});
