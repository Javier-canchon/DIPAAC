

var aciertos = 0;
var errores = 0;

$('#guardar1').click(function() {

   if ($('#transporte').val() === 'transporte'||$('#transporte').val() === 'Transporte'||$('#transporte').val() === 'TRANSPORTE') 
     {
     	aciertos++
     	$('#guardar1').unbind("click");
     	$('#guardar1').css('color', 'black');
     	alert(aciertos);
       
    } else  {
    	$('#guardar1').unbind("click");
        $('#guardar1').css('color', 'black');
       
   }
});

/*----SEGUNDA PREGUNTA--------------------------------*/


$('#guardar2').click(function() {

   if ($('#vestir').val() === 'vestir'||$('#vestir').val() === 'ropa'||$('#vestir').val() === 'bestir') 
     {
     	aciertos++
     	$('#guardar1').unbind("click");
     	$('#guardar1').css('color', 'black');
     	alert(aciertos);
       
    } else  {
    	$('#guardar1').unbind("click");
        $('#guardar1').css('color', 'black');
       
   }
});
