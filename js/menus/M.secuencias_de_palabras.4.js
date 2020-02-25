var errores = 0;

var aciertos = 0;

var puntajep1 = ["0","1","2"];

var puntajep2 = ["0","1","2","3"];



 $(document).ready(function() {
   $('#sortable').sortable();
   $("#boton2").css("display", "none");

    

   $('#probar').button().click(function() {
   var itemOrder = $('#sortable').sortable("toArray");
   
/* Condicional 1 el oso duerme*/

if (puntajep1[0] === itemOrder[0]  && puntajep1[1] === itemOrder[1] && puntajep1[2] === itemOrder[2] )
 { 
       $("#boton2").css("display", "block");
}
else  {
        alert("vuelve a intentarlo");


}


 })

        });