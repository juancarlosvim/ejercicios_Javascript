
debug = true //imprimir console.log y alert
validado = [false, false, false, false, false]; // para validar todos los campos
btnEnviar = document.getElementById('btnEnviar');
window.onload = function () {
    validar();
}

/* esta funcion hace que coge los campos de cada uno */
function validar() {

    btnEnviar.disabled = true;
    btnEnviar.addEventListener("click", function () {
        enviarFormulario();
    });

    var nombre = document.getElementById('idNombre');
    nombre.addEventListener("change", function () {

        comprobarNombre(nombre);
        comprobarFormulario(btnEnviar);
    });

    var alias = document.getElementById('idAlias');
    alias.addEventListener("change", function () {
        comprobarAlias(alias);
        comprobarFormulario(btnEnviar);
    });

    var contrasenia = document.getElementById('idContrasenia');
    contrasenia.addEventListener("change", function () {
       comprobarContrasenia(contrasenia);
        comprobarFormulario(btnEnviar);
    });

    var reContrasenia = document.getElementById('idReContrasenia');
    reContrasenia.addEventListener("change", function () {
       comprobarContraseniaRepetida(contrasenia, reContrasenia);
        comprobarFormulario(btnEnviar);
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
    }else{
        validado[0] = false;
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
    else{
        validado[1] = false;
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
    }else{
        validado[2] = false;
    }
}

/*
    funcion para comprobar las contraseñas si coinciden
 */

function comprobarContraseniaRepetida(contrasenia1, contrasenia2) {
    if(contrasenia1.value != contrasenia2.value){
        contrasenia2.value = "La contraseña es distinta";
        contrasenia2.className = "error";
        validado[3] = false;
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
 funcion que comprueba el formulario y activa el boton si están todos los campos a true

 */

function comprobarFormulario(boton) {
    var formularioValidado = true;

    if(comprobarCheckbox("checkAficiones")==true){
        validado[4] = true;
        if(debug){
            console.log("Validado 4 => "+validado[4]);
        }
    }else{
       validado[4] = false;

    }


    for(i =0, fin= validado.length; i<=fin;i++){
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
    // Aqui si le pasas el boton necesitamos llamar al boton y el boton esta en la funcion validar
    // tendrias que poner el boton como variable global, sin el var
    var comprobacion = document.getElementsByName(nombre);
    var longitud = comprobacion.length;
    var retorno = false;
    for(var j=0; j<longitud;j++) {
        comprobacion[j].addEventListener("click", function() {
            for(i=0;i<longitud;i++){
                if(comprobacion[i].checked==true){
                    retorno = true;
                    /* he utilizo una variable globl del boton para poder activar o desactivar si hago click */
                    if(retorno == true){
                        btnEnviar.disabled = false;
                    }else{
                        btnEnviar.disabled = true;
                    }
                }
            }
        });
    }
    if(debug){
        console.log("retorno "+retorno);
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
   alert("formulario enviado");}