
var errores = 0;

var aciertos = 0;

var puntajep1 = ["0","1","2"];

var puntajep2 = ["0","1","2","3"];



 $(document).ready(function() {
   $('#sortable1').sortable();
    $('#sortable2').sortable();
    $('#sortable3').sortable();

   $('button').button().click(function() {
   var itemOrder = $('#sortable1').sortable("toArray");

for (var i = Things.length - 1; i >= 0; i--) {
	Things[i]
}

alert

   var itemOrder2 = $('#sortable2').sortable("toArray");
   var itemOrder3 = $('#sortable3').sortable("toArray");
/* Condicional 1 el oso duerme*/

if (puntajep1[0] === itemOrder[0]  && puntajep1[1] === itemOrder[1] && puntajep1[2] === itemOrder[2] )
 { 
          aciertos++;


}
else  {
        errores++;


}

/* Condicional 2 La pelota verde*/

if (puntajep1[0] === itemOrder2[0]  && puntajep1[1] === itemOrder2[1] && puntajep1[2] === itemOrder2[2] )
 { 
          aciertos++;


}
else  {
        errores++;


}


/* Condicional 3 Maria esta jugando sola*/

if (puntajep2[0] === itemOrder3[0]  && puntajep2[1] === itemOrder3[1] && puntajep2[2] === itemOrder3[2] && puntajep2[3] === itemOrder3[3])
 { 
          aciertos++;


}
else  {
         errores++;


}

/*--------------------------------------------------*/


    $('#resultado').html("El total de puntos fue: " + aciertos);
    $('#errores').html("El total de errores fue: " + errores);
    //$('#resultado').html("El total de puntos fue: " + aciertos);

    //var segundo = JSON.parse(sessionStorage.getItem("segundo"));
    //var minuto = JSON.parse(sessionStorage.getItem("minuto"));

    //$('#resultado').append("  El estudiante se demoró: " + segundo + " segundos " + "y " + minuto + " minutos");

 var segundo = JSON.parse(sessionStorage.getItem("segundo"));
    var minuto = JSON.parse(sessionStorage.getItem("minuto"));

    $('#resultado').append(" El estudiante se demoro: " + segundo + " segundos " + "y " + minuto + " minutos");











/*---------------------------------------------------*/




            })

        });
