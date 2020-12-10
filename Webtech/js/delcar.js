$(document).ready(function () {
	$(document).on("click", ".delbutton", function (event) {
		event.preventDefault();
		var thiscar;
		var i = $(this).attr("id").substring(5);
		console.log(i);
		$.get("https://webtechcars.herokuapp.com/api/cars", function (cars) {
			thiscar = cars[i];
			console.log(thiscar);
			$.ajax({
				url:
					"https://webtechcars.herokuapp.com/api/cars/" + thiscar._id,
				type: "delete",
				success: function (result) {
					$("#autotable").find("tr:gt(0)").remove();
					$.getJSON(
						"https://webtechcars.herokuapp.com/api/cars",
						function (cars) {
							for (let index = 0; index < cars.length; index++) {
								var row = createCarsRow(cars[index]);
								var buttontd = $("<td></td>");
								var delbutton = document.createElement(
									"button"
								);
								delbutton.className = "delbutton";
								delbutton.id = "delid" + index;
								delbutton.innerHTML = "x";
								$(buttontd).append(delbutton);
								$(row).append(buttontd);
								$("#autotable").append(row);
							}
						}
					);
				},
			});
		});
	});
});
