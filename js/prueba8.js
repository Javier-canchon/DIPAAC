

var aciertos = 0;
var errores = 0;


$('#enviar').click(function() {

    //var tran = $('#transporte').val();
    //var res = str.tolowercase();
    //document.getElementById("transporte").innerHTML = res;

 
            
   if ($('#transporte').val().toLowerCase().trim()=== 'transporte'||$('#transporte').val().toLowerCase().trim()=== "trasporte"||$('#transporte').val().toLowerCase().trim()=== "transportes") 
     {
     	aciertos++
     	$('#guardar1').unbind("click");
     	$('#guardar1').css('color', 'black');
        
       
    } else  {
    	errores++
    	$('#guardar1').unbind("click");
        $('#guardar1').css('color', 'black');
       
   }
//});

/*----SEGUNDA PREGUNTA--------------------------------*/


//$('#guardar2').click(function() {

   if ($('#vestir').val().toLowerCase().trim() === 'vestir'||$('#vestir').val().toLowerCase().trim() === 'ropa'||$('#vestir').val().toLowerCase().trim() === 'bestir') 
     {
     	aciertos++
     	$('#guardar2').unbind("click");
     	$('#guardar2').css('color', 'black');
     	
       
    } else  {
    	errores++
    	$('#guardar2').unbind("click");
        $('#guardar2').css('color', 'black');
       
   }
//});


/*----TERCERA PREGUNTA--------------------------------*/



//$('#guardar3').click(function() {

   if ($('#frutas').val().toLowerCase().trim() === 'frutas'||$('#frutas').val().toLowerCase().trim() === 'fruta') 
     {
     	aciertos++
     	$('#guardar3').unbind("click");
     	$('#guardar3').css('color', 'black');
     	
       
    } else  {
    	errores++
    	$('#guardar3').unbind("click");
        $('#guardar3').css('color', 'black');
       
   }
//});


/*----CUARTA PREGUNTA--------------------------------*/



//$('#guardar4').click(function() {

   if ($('#cocina').val().toLowerCase().trim() === 'cocina'||$('#cocina').val().toLowerCase().trim() ==='cosina') 
     {
     	aciertos++
     	$('#guardar4').unbind("click");
     	$('#guardar4').css('color', 'black');
     	
       
    } else  {
    		errores++
    	$('#guardar4').unbind("click");
        $('#guardar4').css('color', 'black');
       
   }
//});


/*----QUINTA PREGUNTA--------------------------------*/



//$('#guardar5').click(function() {

   if ($('#colores').val().toLowerCase().trim() === 'colores'||$('#colores').val().toLowerCase().trim() === 'color') 
     {
     	aciertos++
     	$('#guardar5').unbind("click");
     	$('#guardar5').css('color', 'black');
     	
       
    } else  {
    		errores++
    	$('#guardar5').unbind("click");
        $('#guardar5').css('color', 'black');
       
   }
});





// boton-----------------------------------------
$("#enviar").click(function(event) {
    $('#resultado').html("El total de puntos fue: " + aciertos);
    $('#errores').html("El total de errores fue: " + errores);
 


    //var segundo = JSON.parse(sessionStorage.getItem("segundo"));
    //var minuto = JSON.parse(sessionStorage.getItem("minuto"));

    //$('#resultado').append("  El estudiante se demoró: " + segundo + " segundos " + "y " + minuto + " minutos");

 var segundo = JSON.parse(sessionStorage.getItem("segundo"));
    var minuto = JSON.parse(sessionStorage.getItem("minuto"));

    $('#resultado').append(" El estudiante se demoró: " + segundo + " segundos " + "y " + minuto + " minutos");

});