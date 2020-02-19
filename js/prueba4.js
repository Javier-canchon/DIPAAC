
var errores = 0;

var aciertos = 0;

var puntajep1 = ["0","1","2"];

var puntajep2 = ["0","1","2","3"];



 $(document).ready(function() {
   $('#sortable1').sortable();
    $('#sortable2').sortable();
    $('#sortable3').sortable();
    $('#sortable4').sortable();
    $('#sortable5').sortable();

   $('#enviar').button().click(function() {
   var itemOrder = $('#sortable1').sortable("toArray");
   var itemOrder2 = $('#sortable2').sortable("toArray");
   var itemOrder3 = $('#sortable3').sortable("toArray");
   var itemOrder4 = $('#sortable4').sortable("toArray");
   var itemOrder5 = $('#sortable5').sortable("toArray");
/* Condicional 1 el oso duerme*/

if (puntajep1[0] === itemOrder[0]  && puntajep1[1] === itemOrder[1] && puntajep1[2] === itemOrder[2] )
 { 
          aciertos++;
           // alert(aciertos);
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


/* Condicional 4 Martha tiene un perro*/

if (puntajep2[0] === itemOrder4[0]  && puntajep2[1] === itemOrder4[1] && puntajep2[2] === itemOrder4[2] && puntajep2[3] === itemOrder4[3])
 { 
          aciertos++;


}
else  {
         errores++;


}


/* Condicional 5 El pajaro vuela alto*/

if (puntajep2[0] === itemOrder5[0]  && puntajep2[1] === itemOrder5[1] && puntajep2[2] === itemOrder5[2] && puntajep2[3] === itemOrder5[3])
 { 
          aciertos++;


}
else  {
         errores++;


}


/*--------------------------------------------------*/

 $('#resultado').html("El total de puntos fue: " + aciertos);
    $('#errores').html("El puntaje de errores fue: " + errores);

    var segundo = JSON.parse(sessionStorage.getItem("segundo"));
    var minuto = JSON.parse(sessionStorage.getItem("minuto"));

    $('#resultado').append("  El estudiante se demoró: " + segundo + " segundos " + "y " + minuto + " minutos");








/*---------------------------------------------------*/




            })

        });
