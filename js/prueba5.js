 
var aciertos = 0;
var errores = 0;
var omisiones = 5; 

// pregunta sobre casa/ caza
$("#Casa").click(function(event) {
	$('#Casa').css('color', 'black');
aciertos++;
omisiones--;
$('#Casa').unbind("click");
$('#Caza').unbind("click");
});

$("#Caza").click(function(event) {
	$('#Caza').css('color', 'black');
errores++;
$('#Casa').unbind("click");
$('#Caza').unbind("click");
});

// pregunta sobre Hablando/ Ablando
$("#Hablando").click(function(event) {
	$('#Hablando').css('color', 'black');
aciertos++;
omisiones--;
$('#Hablando').unbind("click");
$('#Ablando').unbind("click");
});

$("#Ablando").click(function(event) {
	$('#Ablando').css('color', 'black');
errores++;
$('#Hablando').unbind("click");
$('#Ablando').unbind("click");
});


// pregunta sobre vaso/ Bazo
$("#Vaso").click(function(event) {
	$('#Vaso').css('color', 'black');
aciertos++;
omisiones--;
$('#Vaso').unbind("click");
$('#Bazo').unbind("click");
});

$("#Bazo").click(function(event) {
	$('#Bazo').css('color', 'black');
errores++;
$('#Vaso').unbind("click");
$('#Bazo').unbind("click");
});


// pregunta sobre hola/ ola
$("#Ola").click(function(event) {
	$('#Ola').css('color', 'black');
aciertos++;
omisiones--;
$('#Ola').unbind("click");
$('#Hola').unbind("click");
});

$("#Hola").click(function(event) {
	$('#Hola').css('color', 'black');
errores++;
$('#Ola').unbind("click");
$('#Hola').unbind("click");
});


// pregunta sobre vello/ bello
$("#Hiena").click(function(event) {
	$('#Hiena').css('color', 'black');
aciertos++;
omisiones--;
$('#Hiena').unbind("click");
$('#Llena').unbind("click");
});

$("#Llena").click(function(event) {
	$('#Llena').css('color', 'black');
errores++;
$('#Hiena').unbind("click");
$('#Llena').unbind("click");
});



// boton-----------------------------------------
$("#enviar").click(function(event) {
    $('#resultado').html("El total de puntos fue: " + aciertos);
    $('#omision').html("El puntaje de omisiones fue: " + omisiones);
    $('#Errores').html("El puntaje de errores fue: " + errores);

    //var segundo = JSON.parse(sessionStorage.getItem("segundo"));
    //var minuto = JSON.parse(sessionStorage.getItem("minuto"));

    //$('#resultado').append("  El estudiante se demoró: " + segundo + " segundos " + "y " + minuto + " minutos");

 var segundo = JSON.parse(sessionStorage.getItem("segundo"));
    var minuto = JSON.parse(sessionStorage.getItem("minuto"));

    $('#resultado').append(" El estudiante se demoró: " + segundo + " segundos " + "y " + minuto + " minutos");

});