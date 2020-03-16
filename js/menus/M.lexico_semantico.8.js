var puntos = 0; 




$("#boton2").css("display", "none");

$('#probar').click(function() {

   
            
   if ($('#cuerpo').val().toLowerCase().trim()=== 'cuerpo'||$('#cuerpo').val().toLowerCase().trim()=== "humano"||$('#cuerpo').val().toLowerCase().trim()=== "cuerpo humano") 
     {
  
         $("#boton2").css("display", "block");

     	
        
       
    } else  {
    	alert("vuelve a intentarlo");
       
   }
});