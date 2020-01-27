var puntos = 0;
var omisiones = 8;
//drag an drop balon - cancha
$("#balon_f").draggable();
$("#balon").droppable({
    //tolerance: 'fit',
    accept: "#balon_f",
    hoverClass: 'hovered',
    drop: function(event, ui) {
        puntos++;
        omisiones--;
        $("#balon_f").draggable('disable')
    }
});


//drag and drop conejo zanahoria
$("#zanahoria").draggable();
$("#conejo").droppable({
    // tolerance: 'fit',
    accept: "#zanahoria",
    hoverClass: 'hovered',
    drop: function(event, ui) {
        puntos++;
        omisiones--;
        $("#zanahoria").draggable('disable')
    }
});

//drag and drop ensalada cuchara
$("#cuchara").draggable();
$("#ensalada").droppable({
    // tolerance: 'fit',
    hoverClass: 'hovered',
    accept: "#cuchara",

    drop: function(event, ui) {
        puntos++;
        omisiones--;
        //alert(puntos);
        $("#cuchara").draggable('disable')
    }
});

//drag and drop diente cepillo
$("#cepillo").draggable();
$("#diente").droppable({
    // tolerance: 'fit',
    accept: "#cepillo",
    drop: function(event, ui) {
        puntos++;
        omisiones--;
        //alert(puntos);
        $("#cepillo").draggable('disable')
    }
});


//drag and drop vaca leche
$("#vaca").draggable();
$("#leche").droppable({
    // tolerance: 'fit',
    accept: "#vaca",
    drop: function(event, ui) {
        puntos++;
        omisiones--;
        //alert(puntos);
        $("#vaca").draggable('disable')
    }
});

//drag and drop carro rueda
$("#rueda").draggable();
$("#carro").droppable({
    // tolerance: 'fit',
    accept: "#rueda",
    drop: function(event, ui) {
        puntos++;
        omisiones--;
        //alert(puntos);
        $("#rueda").draggable('disable')
    }
});


//drag and drop doctor jeringa
$("#jeringa").draggable();
$("#doctor").droppable({
    // tolerance: 'fit',
    accept: "#jeringa",
    drop: function(event, ui) {
        puntos++;
        omisiones--;
        //alert(puntos);
        $("#jeringa").draggable('disable')
    }
});

//drag and drop tablas gafas

$("#gafas").draggable();
$("#tabla").droppable({
    // tolerance: 'fit',
    accept: "#gafas",
    drop: function(event, ui) {
        puntos++;
        omisiones--;
        //alert(puntos);
        $("#gafas").draggable('disable')
    }
});




// boton de resultado
$("#enviar").click(function(event) {
    $('#resultado').html("El total de puntos fue: " + puntos);
    $('#omisiones').html("El puntaje de omisiones fue: " + omisiones);

    var segundo = JSON.parse(sessionStorage.getItem("segundo"));
    var minuto = JSON.parse(sessionStorage.getItem("minuto"));

    $('#resultado').append("  El estudiante se demoró: " + segundo + " segundos " + "y " + minuto + " minutos");

});