
var aciertos= 0;
var errrores = 5;


$("#perro").css("display", "none");
$("#calabaza").css("display", "none");
$("#conejo").css("display", "none");

$("#llanta").css("display", "none");
$("#plato").css("display", "none");
$("#comida").css("display", "none");


$('#Conejo').click(function() {
	$('#Conejo').css('color', 'black');

	$("#espacio").css("display","none");
         $("#conejo").css("display","inline");
        
         $('#Conejo').unbind("click");
         $('#Calabaza').unbind("click");
         $('#Perro').unbind("click");

     	
  
});

$('#Perro').click(function() {
	$('#Perro').css('color', 'black');
	$("#espacio").css("display","none");
         $("#perro").css("display","inline");

         $('#Conejo').unbind("click");
         $('#Calabaza').unbind("click");
         $('#Perro').unbind("click");
         aciertos ++;
     	errores --;
     	
});

$('#Calabaza').click(function() {
	$('#Calabaza').css('color', 'black');
	$("#espacio").css("display","none");
         $("#calabaza").css("display","inline");

     		$('#Conejo').unbind("click");
         $('#Calabaza').unbind("click");
         $('#Perro').unbind("click");

     	
});


//-------------------------segunda pregunta------------------------------------------





$('#Llanta').click(function() {
	$('#Llanta').css('color', 'black');

	$("#espacio2").css("display","none");
         $("#llanta").css("display","inline");
        
         $('#Llanta').unbind("click");
         $('#Plato').unbind("click");
         $('#Comida').unbind("click");

     	
  
});

$('#Comida').click(function() {
	$('#Comida').css('color', 'black');
	$("#espacio").css("display","none");
         $("#comida").css("display","inline");

        $('#Llanta').unbind("click");
         $('#Plato').unbind("click");
         $('#Comida').unbind("click");
         aciertos ++;
     	errores --;
     	
});

$('#Plato').click(function() {
	$('#Plato').css('color', 'black');
	$("#espacio").css("display","none");
         $("#plato").css("display","inline");

     		$('#Llanta').unbind("click");
         $('#Plato').unbind("click");
         $('#Comida').unbind("click");
     	
});



















