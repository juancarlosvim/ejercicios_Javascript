
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

    var correoElectronico = document.getElementsByName('idCorreoElectronico');

    correoElectronico.addEventListener("change", function () {
        comprobarCorreo(correoElectronico);
    });

    var localidad = document.getElementById('idLocalidad');
    localidad.addEventListener("change", function () {
        comprobarLocalidad(localidad);
    })
}

// funcion que le pasasmos el nombre y le aplicamos dentro la expresion regular
function comprobarNombre(n) {
    var cntNombre = n.value;
    var expresionNombre = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;

    if(debug){
        console.log ("comprobar "+cntNombre);
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
        console.log ("comprobar "+cntTelefono);
    }

    if(expresionTelefono.test(cntTelefono)==false){
        t.value = "Teléfono incorrecto";
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
        console.log ("comprobar "+cntDni);
    }

    if(expresionDni.test(cntDni)==false){
        din.value = "Dni incorrecto";
        din.style.color = ""+colorError;
        din.style.background = ""+fondoError;
    }else{
        din.style.color = ""+colorCorrecto;
        din.style.background = ""+fondoCorrecto;

    }

}

//funcion comprobar correoElectronico
function comprobarCorreo(c) {
    var cntCorreo = c.value;
    var expresionCorreo = /^[A-Z, a-z, 0-9,_]*@[A-Z, a-z]*.[a-z,A-Z]{2,3}$/;

    if(debug){
        console.log ("comprobar "+cntCorreo);
    }

    if(expresionCorreo.test(cntCorreo)==false){
        c.value = "Correo electrónico incorrecto";
        c.style.color = ""+colorError;
        c.style.background = ""+fondoError;
    }else{
        c.style.color = ""+colorCorrecto;
        c.style.background = ""+fondoCorrecto;

    }

}


function comprobarLocalidad(l) {
    var cntLocalidad = c.value;
    var expresionLocalidad = /^[A-Z]{1}[a-zñáéíóú]+[\s]$/;

    if(debug){
        console.log ("comprobar "+cntLocalidad);
    }

    if(expresionLocalidad.test(cntLocalidad)==false){
        l.value = "Localidad incorrecta";
        l.style.color = ""+colorError;
        l.style.background = ""+fondoError;
    }else{
        l.style.color = ""+colorCorrecto;
        l.style.background = ""+fondoCorrecto;

    }

}