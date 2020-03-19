
var aciertos= 0;
var errrores = 5;


$("#perro").css("display", "none");
$("#calabaza").css("display", "none");
$("#conejo").css("display", "none");

$("#llanta").css("display", "none");
$("#plato").css("display", "none");
$("#comida").css("display", "none");

$("#oso").css("display", "none");
$("#carro").css("display", "none");
$("#amigo").css("display", "none");

$("#come").css("display", "none");
$("#rie").css("display", "none");
$("#pinta").css("display", "none");




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
	$("#espacio2").css("display","none");
         $("#comida").css("display","inline");

        $('#Llanta').unbind("click");
         $('#Plato').unbind("click");
         $('#Comida').unbind("click");
         aciertos ++;
     	errores --;
     	
});

$('#Plato').click(function() {
	$('#Plato').css('color', 'black');
	$("#espacio2").css("display","none");
         $("#plato").css("display","inline");

     		$('#Llanta').unbind("click");
         $('#Plato').unbind("click");
         $('#Comida').unbind("click");
     	
});



//-------------------------tercera pregunta------------------------------------------





$('#Oso').click(function() {
	$('#Oso').css('color', 'black');

	$("#espacio3").css("display","none");
         $("#oso").css("display","inline");
        
         $('#Oso').unbind("click");
         $('#Amigo').unbind("click");
         $('#Carro').unbind("click");
          aciertos ++;
     	errores --;

     	
  
});

$('#Amigo').click(function() {
	$('#Amigo').css('color', 'black');
	$("#espacio3").css("display","none");
         $("#amigo").css("display","inline");

        $('#Oso').unbind("click");
         $('#Amigo').unbind("click");
         $('#Carro').unbind("click");
     	
});

$('#Carro').click(function() {
	$('#Carro').css('color', 'black');
	$("#espacio3").css("display","none");
         $("#carro").css("display","inline");

     		$('#Oso').unbind("click");
         $('#Amigo').unbind("click");
         $('#Carro').unbind("click");
     	
});




//-------------------------cuarta pregunta------------------------------------------





$('#Pinta').click(function() {
	$('#Pinta').css('color', 'black');

	$("#espacio4").css("display","none");
         $("#pinta").css("display","inline");
        
         $('#Pinta').unbind("click");
         $('#Come').unbind("click");
         $('#Rie').unbind("click");
          aciertos ++;
     	errores --;
     	alert(aciertos);
     	
  
});

$('#Rie').click(function() {
	$('#Rie').css('color', 'black');
	$("#espacio4").css("display","none");
         $("#rie").css("display","inline");

        $('#Pinta').unbind("click");
         $('#Come').unbind("click");
         $('#Rie').unbind("click");
});

$('#Come').click(function() {
	$('#Come').css('color', 'black');
	$("#espacio4").css("display","none");
         $("#come").css("display","inline");

     		$('#Pinta').unbind("click");
         $('#Come').unbind("click");
         $('#Rie').unbind("click");
});

//-------------------------quinta pregunta------------------------------------------





$('#Oso').click(function() {
	$('#Oso').css('color', 'black');

	$("#espacio3").css("display","none");
         $("#oso").css("display","inline");
        
         $('#Oso').unbind("click");
         $('#Amigo').unbind("click");
         $('#Carro').unbind("click");
          aciertos ++;
     	errores --;

     	
  
});

$('#Amigo').click(function() {
	$('#Amigo').css('color', 'black');
	$("#espacio3").css("display","none");
         $("#amigo").css("display","inline");

        $('#Oso').unbind("click");
         $('#Amigo').unbind("click");
         $('#Carro').unbind("click");
     	
});

$('#Carro').click(function() {
	$('#Carro').css('color', 'black');
	$("#espacio3").css("display","none");
         $("#carro").css("display","inline");

     		$('#Oso').unbind("click");
         $('#Amigo').unbind("click");
         $('#Carro').unbind("click");
     	
});






























