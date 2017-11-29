
var debug = true; // variable para imprimir en console.log o alert

//utilizo variables para los colores
var colorError = "#FF0000";
var fondoError = "#FA5858";
var colorCorrecto = "#000000";
var fondoCorrecto = "#FFFFFF";

// noinspection JSAnnotator
window.onload= function () {
    validar();
}

//esta funcion comprobará cada campo
function validar() {

    var btnEnviar = document.getElementById('btnEnviar');
    var btnLimpiar = document.getElementById('btnLimpiar');

    var nombre = document.getElementById('idNombre');

    nombre.addEventListener("change", function () {

        comprobarNombre(nombre);
    });

    var telefono = document.getElementById('idTelefono');

    telefono.addEventListener("change", function () {
        comprobarTelefono(telefono);
    });

    var dni = document.getElementById('idDni');

    dni.addEventListener("change", function () {
        comprobarDni(dni);
    });
}

// funcion que le pasasmos el nombre y le aplicamos dentro la expresion regular
function comprobarNombre(n) {
    var cntNombre = n.value;
    var expresionNombre = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;

    if(debug){
        console.log ("comprobarNombre: "+cntNombre);
    }

    if(expresionNombre.test(cntNombre)==false){
        n.value = "Nombre incorrecto";
        n.style.color = ""+colorError;
        n.style.background = ""+fondoError;
    }else{
        n.style.color = ""+colorCorrecto;
        n.style.background = ""+fondoCorrecto;

    }

}

//funcion comprobar telefono recibe un telefono

function comprobarTelefono(t) {
    var cntTelefono = t.value;
    var expresionTelefono = /^[0-9]{9}$/;

    if(debug){
        console.log ("comprobarNombre: "+cntTelefono);
    }

    if(expresionTelefono.test(cntTelefono)==false){
        t.value = "Nombre incorrecto";
        t.style.color = ""+colorError;
        t.style.background = ""+fondoError;
    }else{
        t.style.color = ""+colorCorrecto;
        t.style.background = ""+fondoCorrecto;

    }

}

// funcion comprobar DNi
function comprobarDni(din) {
    var cntDni = din.value;
    var expresionDni = /^[0-9]{8}[A-Z]{1}$/;

    if(debug){
        console.log ("comprobarNombre: "+cntDni);
    }

    if(expresionDni.test(cntDni)==false){
        din.value = "Nombre incorrecto";
        din.style.color = ""+colorError;
        din.style.background = ""+fondoError;
    }else{
        din.style.color = ""+colorCorrecto;
        din.style.background = ""+fondoCorrecto;

    }

}

