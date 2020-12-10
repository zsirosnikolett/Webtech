$(document).ready(function () {
	$.getJSON("https://webtechcars.herokuapp.com/api/cars", function (cars) {
		for (let index = 0; index < cars.length; index++) {
			var row = createCarsRow(cars[index]);
			var delbutton = document.createElement("button");
			var buttontd = document.createElement("td");
			delbutton.className = "delbutton";
			delbutton.id = "delid" + index;
			delbutton.innerHTML = "x";
			buttontd.appendChild(delbutton);
			$(row).append(buttontd);
			$("#autotable").append(row);
		}
	});
});

function createCarsRow(car) {
	var tr = $("<tr></tr>");
	var nametd = $("<td>" + car.name + "</td>");
	var consumptiontd = $("<td>" + car.consumption + "</td>");
	var colortd = $("<td>" + car.color + "</td>");
	var manufacturertd = $("<td>" + car.manufacturer + "</td>");
	var availabletd = $("<td>" + car.avaiable + "</td>");
	var yeartd = $("<td>" + car.year + "</td>");
	var horsepowertd = $("<td>" + car.horsepower + "</td>");

	$(tr).append(nametd);
	$(tr).append(nametd);
	$(tr).append(consumptiontd);
	$(tr).append(colortd);
	$(tr).append(manufacturertd);
	$(tr).append(availabletd);
	$(tr).append(yeartd);
	$(tr).append(horsepowertd);

	return tr;
}
