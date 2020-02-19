var punto = "punto";
var aciertos = 0;
var coma = "coma";


$(document).ready(function() {

$("#boton2").css("display", "none");

//__________________________________
$("#item_dosB").click(function() {
	var item_dosB=$('#item_dosB').val();
	if (punto == item_dosB ) {
		
		 
		
		  $('#item_dosB').prop('disabled', true);
	}
});


//--------------------------------------

$("#item_cuatroA").click(function() {
	var item_cuatroA=$('#item_cuatroA').val();
	if (coma == item_cuatroA ) {
		aciertos++;
		omisiones--;
		errores--;
		$('#item_cuatroA').prop('disabled', true);
	}
});

$("#item_cuatroB").click(function() {
	var item_cuatroB=$('#item_cuatroB').val();
	if (coma == item_cuatroB ) {
		aciertos++; 
		omisiones--;
		errores--;
		$('#item_cuatroB').prop('disabled', true);
	}
});



if (aciertos===3) {


$("#boton2").css("display", "block");
}


})