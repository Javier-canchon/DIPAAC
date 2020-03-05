var puntos = 0; 

$("#boton2").css("display", "none");

//drag an drop caliente - zone1i
$("#joven").draggable();
$("#zone1i").droppable({
    //tolerance: 'fit',
    accept: "#joven",
    //hoverClass: 'hovered',
    drop: function(event, ui) {
        puntos++;
       
        // alert(puntos);
        $("#joven").draggable('disable')

        if (puntos ==4) {
            $("#boton2").css("display", "block");


        }
    
    }
});

// drag and drop frio - zone1d
$("#anciano").draggable();
$("#zone1d").droppable({
        accept: "#anciano",
        drop: function(event, ui) {
            puntos++;
            
    $("#anciano").draggable('disable') 

    if (puntos ==4) {
            $("#boton2").css("display", "block");


        }

        }
    }

);
//-----------------------------------------------------------------------------        


// drag and drop feliz - zone2i
$("#pesado").draggable();
$("#zone2i").droppable({
        accept: "#pesado",
        drop: function(event, ui) {
            puntos++;
        
            $("#pesado").draggable('disable')


            if (puntos ==4) {
            $("#boton2").css("display", "block");


        }
        }
    }

);

// drag and drop triste - zone2d
$("#liviano").draggable();
$("#zone2d").droppable({
        accept: "#liviano",
        drop: function(event, ui) {
            puntos++;
            
            $("#liviano").draggable('disable')
        
  if (puntos ==4) {
            $("#boton2").css("display", "block");


        }

        }


    }

);
//------------------------------------------------------------------------