
var puntos = 0;

 $("#boton2").css("display", "none");

$("#manzana").draggable();
$("#arbol").droppable({
    //tolerance: 'fit',
    accept: "#manzana",
    hoverClass: 'hovered',
    drop: function(event, ui) {
        puntos++;
 
        $("#manzana").draggable('disable')
        
if (puntos ===2) {

	$("#boton2").css("display", "block");



}

    }
});


$("#raton").draggable();
$("#computer").droppable({
    //tolerance: 'fit',
    accept: "#raton",
    hoverClass: 'hovered',
    drop: function(event, ui) {
        puntos++;
 
        $("#raton").draggable('disable')

if (puntos ===2) {

	$("#boton2").css("display", "block");



}

    }
});


