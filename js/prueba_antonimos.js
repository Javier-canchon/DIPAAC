var puntos = 0;
//drag an drop caliente - zone1i
$("#caliente").draggable();
$("#zone1i").droppable({
    //tolerance: 'fit',
    accept: "#caliente",
    //hoverClass: 'hovered',
    drop: function(event, ui) {
        puntos++;
        // alert(puntos);
    }
});

// drag and drop frio - zone1d
$("#frio").draggable();
$("#zone1d").droppable({
        accept: "#frio",
        drop: function(event, ui) {
            puntos++
            //alert(puntos);
        }
    }

);
//-----------------------------------------------------------------------------        


// drag and drop feliz - zone2i
$("#feliz").draggable();
$("#zone2i").droppable({
        accept: "#feliz",
        drop: function(event, ui) {
            puntos++
            //alert(puntos);
        }
    }

);

// drag and drop triste - zone2d
$("#triste").draggable();
$("#zone2d").droppable({
        accept: "#triste",
        drop: function(event, ui) {
            puntos++
            //alert(puntos);
        }
    }

);
//------------------------------------------------------------------------

// drag and drop cerrado - zone3i
$("#cerrado").draggable();
$("#zone3i").droppable({
        accept: "#cerrado",
        drop: function(event, ui) {
            puntos++
            //alert(puntos);
        }
    }

);

// drag and drop abierto - zone3d
$("#abierto").draggable();
$("#zone3d").droppable({
        accept: "#abierto",
        drop: function(event, ui) {
            puntos++
            //alert(puntos);
        }
    }

);

//----------------------------------------------------------------------------------

// drag and drop dia - zone4i
$("#dia").draggable();
$("#zone4i").droppable({
    accept: "#dia",
    drop: function(event, ui) {
        puntos++
        //alert(puntos);
    }
});


// drag and drop noche - zone4d
$("#noche").draggable();
$("#zone4d").droppable({
    accept: "#noche",
    drop: function(event, ui) {
        puntos++
        //alert(puntos);
    }
});

// boton de resultado
$("#enviar").click(function(event) {
    $('#resultado').html("El total de puntos fue: " + puntos / 2);


    //aquí se almacenan las variables guardadas por el objeto localstorage o sessionstorage
    //la diferencia entre localstorage y sessionstorage es que local almancena indefinidamente hasta que se limpie o vacie la base de datos
    //sessionstaorage maniente los datos mientras la ventana actual esté activa o abierta
    var segundo = JSON.parse(sessionStorage.getItem("segundo"));
    var minuto = JSON.parse(sessionStorage.getItem("minuto"));

    $('#resultado').append("El estudiante se demoró: " + segundo + " segundos " + "y " + minuto + " minutos");

});