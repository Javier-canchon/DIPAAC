$("#libro").css("display", "none");
$("#foto").css("display", "none");
$("#quezo").css("display", "none");

$("#boton2").css("display", "none");


$('#Libro').click(function() {
	$('#Libro').css('color', 'black');

	$("#espacio1").css("display","none");
         $("#libro").css("display","inline");
        
         $('#Libro').unbind("click");
         $('#Foto').unbind("click");
         $('#Quezo').unbind("click");
          $("#boton2").css("display", "block");


     	
  
});

$('#Foto').click(function() {
	$('#Foto').css('color', 'black');
	$("#espacio1").css("display","none");
         $("#foto").css("display","inline");

         $('#Libro').unbind("click");
         $('#Foto').unbind("click");
         $('#Quezo').unbind("click");
          $("#boton2").css("display", "block");

});

$('#Quezo').click(function() {
	$('#Quezo').css('color', 'black');
	$("#espacio1").css("display","none");
         $("#quezo").css("display","inline");

     		$('#Libro').unbind("click");
         $('#Foto').unbind("click");
         $('#Quezo').unbind("click");
          $("#boton2").css("display", "block");

     	
});

