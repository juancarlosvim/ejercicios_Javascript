
var debug = true //imprimir console.log y alert

window.onload = function () {


}

/* esta funcion hace que coge los campos de cada uno */
function validar() {

    var nombre = document.getElementById('idNombre');

    nombre.addEventListener("change", function () {
        comprobarNombre(nombre);
    });
}


/* funcion que recibe un nombre y  */
function comprobarNombre(n) {

    var contNombre = n.value;
    var expresionNombre = /^([A-Z]{1}[a-zñáéíóú]+[/s]*)+$/;
    if(debug){
        console.log(contNombre);
    }
    if(expresionNombre.test(contNombre)==fale){

    }

}

/*funcion que le pasamos