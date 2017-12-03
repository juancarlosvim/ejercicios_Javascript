
var debug = true //imprimir console.log y alert
validado = [false, false, false, false, false]; // para validar todos los campos

window.onload = function () {

    validar();


}

/* esta funcion hace que coge los campos de cada uno */
function validar() {

    var nombre = document.getElementById('idNombre');

    nombre.addEventListener("change", function () {

        comprobarNombre(nombre);
    });

    var alias = document.getElementById('idAlias');
    alias.addEventListener("change", function () {
        comprobarAlias(alias);
    });

    var contrasenia = document.getElementById('idContrasenia');
    contrasenia.addEventListener("change", function () {
       comprobarContrasenia(contrasenia);
    });

    var reContrasenia = document.getElementById('idReContrasenia');
    reContrasenia.addEventListener("change", function () {
       comprobarContraseniaRepetida(contrasenia, reContrasenia);
    });

    var btnEnviar = document.getElementById('btnEnviar');
    btnEnviar.addEventListener("click", function () {
       enviarFormulario();
    });



    rellenarFechaDeNacimieno(1990,2020);
}


/* funcion que recibe un nombre y comnprueba su expresion regular */
function comprobarNombre(n) {

    var contNombre = n.value;
    var expresionNombre = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;

    if(comprobarExpresion(n, expresionNombre)==true){

        validado[0] = true;

        if(debug){
            console.log("Valdado 0 => "+validado[0]);
        }
    }

}
/* funcion que recibe un alias y comnprueba su expresion regular */
function comprobarAlias(a) {
    var contAlias = a.value;
    var expresionAlias = /^[A-Z,a-z,0-9]{3,14}$/;

    if(comprobarExpresion(a, expresionAlias)==true){
        validado[1] = true;
        if(debug){
            console.log("Validado 1=> "+validado[1]);
        }
    }
}
/* funcion que recibe una contraseña y comnprueba su expresion regular */
function comprobarContrasenia(c) {
    var contContrasenia = c.value;
    var expresionContrasenia = /^[A-Z, a-z, 0,9]{6,20}$/;

    if(comprobarExpresion(c, expresionContrasenia)==true){
        validado[2] = true;
        if(debug){
            console.log("Validado 2 => "+validado[2]);
        }
    }
}

/*
    funcion para comprobar las contraseñas si coinciden
 */

function comprobarContraseniaRepetida(contrasenia1, contrasenia2) {
    if(contrasenia1.value != contrasenia2.value){
        contrasenia2.value = "La contraseña es distinta";
        contrasenia2.className = "error";
    }else{
        contrasenia2.className = "correcto";
        validado[3] = true;
        if(debug){
            console.log("Validado 3 => "+validado[3]);
        }
    }
}

/*funcion para rellenar las fechas de nacimiento
le entra dos numeros

ejemplo de la funcion rellenarFechaDeNacimieno(1990,2020);

 */
function rellenarFechaDeNacimieno(numInf, numSup) {
    var relleno ="";
    var cogerFechaNacimiento = document.getElementById('fechaNacimiento');
    for(i=numInf;i<=numSup;i++){
        relleno += "<option value='"+i+"'>"+i+"</option>";
    }

    cogerFechaNacimiento.innerHTML = relleno;
}




/*
 funcion comprobar validez del formulario
 */

function comprobarFormulario() {
    var formularioValidado = true;
    if(comprobarCheckbox("checkAficiones")==true){
        validado[4] = true;
        if(debug){
            console.log("Validado 4 => "+validado[4]);
        }
    }

    for(i =0, fin= validado.length; i<fin;i++){
        if(validado[i]==false){
            formularioValidado = false;
        }
    }

    return formularioValidado;
}

/*
    funcion comprobar que los campos estan chequeados
 */

function comprobarCheckbox(nombre) {
    var comprobacion = document.getElementsByName(nombre);
    var longitud = comprobacion.length;

    var retorno = false;

    if(debug){
        console.log(comprobacion);
    }
    for(i=0;i<longitud;i++){
        if(comprobacion[i].checked==true){

            retorno = true
        }
    }
    return  retorno;
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

/*
 funcion enviarFormulario
 */

function enviarFormulario() {
    var formValidado = comprobarFormulario();

    if(formValidado==true){
        alert("Formulario enviado");
    }else{
        alert("Formulario no enviado vuelva a comprobar sus datos");
    }
}