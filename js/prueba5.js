 
var aciertos = 0;
var errores = 0;
var omisiones = 10; 

// primera pregunta
$("#Casa").click(function(event) {
	$('#Casa').css('color', 'black');
aciertos++;
omisiones--;
alert(aciertos);
$('#Casa').unbind("click");
$('#Caza').unbind("click");
});

$("#Caza").click(function(event) {
	$('#Caza').css('color', 'black');
errores++;
alert(errores);
$('#Casa').unbind("click");
$('#Caza').unbind("click");
});