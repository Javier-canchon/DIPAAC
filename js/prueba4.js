var puntos = 0;
var omisiones = 8;


//drag an drop caliente - zone1i
$("#Juan1").draggable();
$("#hrJuan").droppable({
    //tolerance: 'fit',
    accept: "#Juan1",
    //hoverClass: 'hovered',
    drop: function(event, ui) {
        puntos++;
        omisiones--;
        alert(puntos);
    }
});