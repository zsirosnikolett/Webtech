$(document).ready(function () {
	$.get(
		"https://webtechcars.herokuapp.com/api/manufacturers",
		function (manufacturers) {
			var table = document.getElementById("mantable");

			for (let index = 0; index < manufacturers.length; index++) {
				var row = createManRow(manufacturers[index]);
				table.appendChild(row);
			}
		}
	);
});

function createManRow(man) {
	var tr = $("<tr></tr>");
	var nametd = $("<td>" + car.name + "</td>");
	var countrytd = $("<td>" + car.country + "</td>");
	var foundedtd = $("<td>" + car.founded + "</td>");

	tr.appendChild(nametd);
	tr.appendChild(countrytd);
	tr.appendChild(foundedtd);

	return tr;
}
