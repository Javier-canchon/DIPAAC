var puntos = 0;
var omisiones = 8;
var errores = 8;

//drag an drop caliente - zone1i
$("#lento").draggable();
$("#zone1i").droppable({
    //tolerance: 'fit',
    accept: "#lento",
    //hoverClass: 'hovered',
    drop: function(event, ui) {
        puntos++;
        omisiones--;
        // alert(puntos);
        $("#lento").draggable('disable')
    
    }
});

// drag and drop frio - zone1d
$("#rapido").draggable();
$("#zone1d").droppable({
        accept: "#rapido",
        drop: function(event, ui) {
            puntos++;
            omisiones--;
    $("#rapido").draggable('disable') 
        }
    }

);
//-----------------------------------------------------------------------------        


// drag and drop feliz - zone2i
$("#feliz").draggable();
$("#zone2i").droppable({
        accept: "#feliz",
        drop: function(event, ui) {
            puntos++;
            omisiones--;
            $("#feliz").draggable('disable')
        }
    }

);

// drag and drop triste - zone2d
$("#triste").draggable();
$("#zone2d").droppable({
        accept: "#triste",
        drop: function(event, ui) {
            puntos++;
            omisiones--;
            $("#triste").draggable('disable')
        }
    }

);
//------------------------------------------------------------------------

// drag and drop cerrado - zone3i
$("#cerrado").draggable();
$("#zone3i").droppable({
        accept: "#cerrado",
        drop: function(event, ui) {
            puntos++;
            omisiones--;
            $("#cerrado").draggable('disable')
        }
    }

);

// drag and drop abierto - zone3d
$("#abierto").draggable();
$("#zone3d").droppable({
        accept: "#abierto",
        drop: function(event, ui) {
            puntos++;
            omisiones--;
            $("#abierto").draggable('disable')
        }
    }

);

//----------------------------------------------------------------------------------

// drag and drop dia - zone4i
$("#dia").draggable();
$("#zone4i").droppable({
    accept: "#dia",
    drop: function(event, ui) {
        puntos++;
        omisiones--;
      $("#dia").draggable('disable')
    }
});


// drag and drop noche - zone4d
$("#noche").draggable();
$("#zone4d").droppable({
    accept: "#noche",
    drop: function(event, ui) {
        puntos++;
        omisiones--;
        $("#noche").draggable('disable')
    }
});




// boton de resultado
$("#enviar").click(function(event) {
    $('#resultado').html(" El total de puntos fue: " + puntos );
    $('#errores').html("El total de puntos por errores fue " + omisiones );
   //$('#comision').html("El total de puntos por comision fue " + comision); 


    //aquí se almacenan las variables guardadas por el objeto localstorage o sessionstorage
    //la diferencia entre localstorage y sessionstorage es que local almancena indefinidamente hasta que se limpie o vacie la base de datos
    //sessionstaorage maniente los datos mientras la ventana actual esté activa o abierta
    var segundo = JSON.parse(sessionStorage.getItem("segundo"));
    var minuto = JSON.parse(sessionStorage.getItem("minuto"));

    $('#resultado').append(" El estudiante se demoró: " + segundo + " segundos " + "y " + minuto + " minutos");

});