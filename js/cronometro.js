$(document).ready(function() {

    var tiempo = {
        hora: 0,
        minuto: 0,
        segundo: 0
    };

    var tiempo_corriendo = null;


    tiempo_corriendo = setInterval(function() {
        // Segundos
        tiempo.segundo++;
        if (tiempo.segundo >= 60) {
            tiempo.segundo = 0;
            tiempo.minuto++;
        }

        // Minutos
        if (tiempo.minuto >= 60) {
            tiempo.minuto = 0;
            tiempo.hora++;
        }

        tiempo.hora < 10 ? '0' + tiempo.hora : tiempo.hora
        tiempo.minuto < 10 ? '0' + tiempo.minuto : tiempo.minuto
        tiempo.segundo < 10 ? '0' + tiempo.segundo : tiempo.segundo

        // local storage es una API de almacenamiento local que permite guardar valores de variables sen el navegador
        //estos dos valores se guardan para posteriormente ser consultados en otras librerías
        sessionStorage.setItem("segundo", JSON.stringify(tiempo.segundo));
        sessionStorage.setItem("minuto", JSON.stringify(tiempo.minuto));


    }, 1000);
});