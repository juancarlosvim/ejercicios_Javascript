
var debug = true; // variable para imprimir en console.log o alert
var validado = [false, false, false, false, false];
//utilizo variables para los colores
var colorError = "#FF0000";
var fondoError = "#FA5858";
var colorCorrecto = "#000000";
var fondoCorrecto = "#FFFFFF";

// noinspection JSAnnotator
window.onload = function () {
    validar();
}

//esta funcion comprobará cada campo
function validar() {

    var btnEnviar = document.getElementById('btnEnviar');
    btnEnviar.disabled = true;
    btnEnviar.addEventListener("click", function () {
       enviarFormulario();
    });

    var nombre = document.getElementById('idNombre');

    nombre.addEventListener("change", function () {

        comprobarNombre(nombre);
        habilitarBoton(btnEnviar);
    });

    var telefono = document.getElementById('idTelefono');

    telefono.addEventListener("change", function () {
        comprobarTelefono(telefono);
        habilitarBoton(btnEnviar);
    });

    var dni = document.getElementById('idDni');

    dni.addEventListener("change", function () {
        comprobarDni(dni);
        habilitarBoton(btnEnviar);
    });

    var correoElectronico = document.getElementById('idCorreoElectronico');

    correoElectronico.addEventListener("change", function () {
        comprobarCorreo(correoElectronico);
        habilitarBoton(btnEnviar);
    });

    var localidad = document.getElementById('idLocalidad');
    localidad.addEventListener("change", function () {
        comprobarLocalidad(localidad);
        habilitarBoton(btnEnviar);
    });
}

// funcion que le pasasmos el nombre y le aplicamos dentro la expresion regular
function comprobarNombre(n) {
    var cntNombre = n.value;
    var expresionNombre = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;

    if(debug){
        console.log ("comprobar nombre "+cntNombre);
    }
    if(comprobarExpresion(n, expresionNombre)==true){

        validado[0] = true;

        if(debug){
            console.log("Valdado 0 => "+validado[0]);
        }
    }else{
        validado[0] = false;
    }


}

//funcion comprobar telefono recibe un telefono

function comprobarTelefono(t) {
    var cntTelefono = t.value;
    var expresionTelefono = /^[0-9]{9}$/;

    if(comprobarExpresion(t, expresionTelefono)==true){

        validado[1] = true;

        if(debug){
            console.log("Valdado 1 => "+validado[1]);
        }
    }else{
        validado[1] = false;
    }




}

// funcion comprobar DNi
function comprobarDni(din) {
    var cntDni = din.value;
    var expresionDni = /^[0-9]{8}[A-Z]{1}$/;

    if(comprobarExpresion(din, expresionDni)==true){

        validado[2] = true;

        if(debug){
            console.log("Valdado 2 => "+validado[2]);
        }
    }else{
        validado[2] = false;
    }



}

//funcion comprobar correoElectronico
function comprobarCorreo(c) {
    var cntCorreo = c.value;
    var expresionCorreo = /^[A-Z, a-z, 0-9,_]*@[A-Z, a-z]*.[a-z,A-Z]{2,3}$/;

    if(comprobarExpresion(c, expresionCorreo)==true){

        validado[3] = true;

        if(debug){
            console.log("Valdado 3 => "+validado[3]);
        }
    }else{
        validado[3] = false;
    }




}


function comprobarLocalidad(l) {
    var cntLocalidad = l.value;
    var expresionLocalidad = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;

    if(comprobarExpresion(l, expresionLocalidad)==true){

        validado[4] = true;

        if(debug){
            console.log("Valdado 4 => "+validado[4]);
        }
    }else{
        validado[4] = false;
    }
}

/*
 funcion para habilitar boton
 */
function habilitarBoton(boton) {
   var formularioValidado = true;

   for(i=0, fin=validado.length;i<fin;i++){
       if(validado[i]==false){
           formularioValidado = false;
       }
   }
   if(formularioValidado==true){
       boton.disabled = false;
   }else{
       boton.disabled = true;
   }
   return formularioValidado;
}
/*
 Funcion para comprobar la expresion regular
 */
function comprobarExpresion(campo, expresion) {
    var nombre = campo.value;
    var retorno = false;

    if(expresion.test(nombre)==false){
        campo.value = "Dato incorrecto"
        campo.className = "error";
    }else{
        campo.className = "correcto";
        retorno = true;
    }
    return retorno;


}

function enviarFormulario() {
    alert("Formulario enviado");
}