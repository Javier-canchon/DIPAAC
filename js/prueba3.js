
var errores = 13;
var omisiones = 13;
var aciertos = 0;
var pregunta = "pregunta";
var preguntaf = "preguntaf";
var coma = "coma";
var punto = "punto";
var admiracion = "admiracion";
var admiracionf = "admiracionf";
// item  1 -------------------------------------------------------------------------

$("#item_unoA").click(function() {
	var item_unoA=$('#item_unoA').val();
	if (pregunta == item_unoA ) {
		aciertos++;
		omisiones--
		errores--;
		$('#item_unoA').prop('disabled', true);
	}


});

$("#item_unoB").click(function() {
	var item_unoB=$('#item_unoB').val();
	if (preguntaf == item_unoB ) {
		aciertos++; 
		omisiones--; 
		errores--;
		$('#item_unoB').prop('disabled', true);

	}
});

// item 2----------------------------------------------------------------------

$("#item_dosA").click(function() {
	var item_dosA=$('#item_dosA').val();
	if (admiracion == item_dosA ) {
		aciertos++;
		omisiones--;
		errores--;
		$('#item_dosA').prop('disabled', true);
		
	}
});

$("#item_dosB").click(function() {
	var item_dosB=$('#item_dosB').val();
	if (admiracionf == item_dosB ) {
		aciertos++; 
		omisiones--;
		errores--;
		$('#item_dosB').prop('disabled', true);
		
	}
});

//item 3------------------------------------------------------------------------


$("#item_tresA").click(function() {
	var item_tresA=$('#item_tresA').val();
	if (pregunta == item_tresA ) {
		aciertos++;
		omisiones--;
		errores--;
		$('#item_tresA').prop('disabled', true);
	}
});

$("#item_tresB").click(function() {
	var item_tresB=$('#item_tresB').val();
	if (preguntaf == item_tresB ) {
		aciertos++;
		omisiones--; 
		errores--;
		$('#item_tresB').prop('disabled', true);
		
	}
});

//item 4------------------------------------------------------------------------


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

//item 5------------------------------------------------------------------------


$("#item_quintoA").click(function() {
	var item_quintoA=$('#item_quintoA').val();
	if (coma == item_quintoA ) {
		aciertos++;
		omisiones--;
		errores--;
		$('#item_quintoA').prop('disabled', true);
	}
});

$("#item_quintoB").click(function() {
	var item_quintoB=$('#item_quintoB').val();
	if (coma == item_quintoB ) {
		aciertos++; 
		omisiones--;
		errores--;
		$('#item_quintoB').prop('disabled', true);
	}
});

$("#item_quintoC").click(function() {
	var item_quintoC=$('#item_quintoC').val();
	if (punto == item_quintoC ) {
		aciertos++; 
		omisiones--;
		errores--;
		$('#item_quintoC').prop('disabled', true);
	}
});

//item 6------------------------------------------------------------------------


$("#item_sextoA").click(function() {
	var item_sextoA=$('#item_sextoA').val();
	if (admiracion == item_sextoA ) {
		aciertos++;
		omisiones--;
		errores--;
		//alert(aciertos);
		$('#item_sextoA').prop('disabled', true);
	}
});

$("#item_sextoB").click(function() {
	var item_sextoB=$('#item_sextoB').val();
	if (admiracionf == item_sextoB ) {
		aciertos++; 
		omisiones--;
		errores--;
		//alert(aciertos);
		$('#item_sextoB').prop('disabled', true);
	}
});


// boton-----------------------------------------
$("#enviar").click(function(event) {
    $('#resultado').html("El total de puntos fue: " + aciertos);
  	$('#omisiones').html("El total de puntos fue: " + omisiones);
  	$('#errores').html("El total de puntos fue: " + errores);

    //var segundo = JSON.parse(sessionStorage.getItem("segundo"));
    //var minuto = JSON.parse(sessionStorage.getItem("minuto"));

    //$('#resultado').append("  El estudiante se demoró: " + segundo + " segundos " + "y " + minuto + " minutos");

 var segundo = JSON.parse(sessionStorage.getItem("segundo"));
    var minuto = JSON.parse(sessionStorage.getItem("minuto"));

    $('#resultado').append(" El estudiante se demoró: " + segundo + " segundos " + "y " + minuto + " minutos");

});