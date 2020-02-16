var punto = "punto";


$("#boton2").css("display", "none");


$("#item_dosB").click(function() {
	var item_dosB=$('#item_dosB').val();
	if (punto == item_dosB ) {
		
		 $("#boton2").css("display", "block");
		
		  $('#item_dosB').prop('disabled', true);
	}


});