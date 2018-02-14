let debug = true;
let iniciar = () =>{

    let btnEnviar = document.getElementById('btnEnviar');
    btnEnviar.addEventListener("click", guardarDatos);
    cargarFechas(1927, 2018);


    let comprobarALias = document.getElementById('txtAlias');

    comprobarALias.addEventListener("change",()=>{
        let alias = document.getElementById('txtAlias').value;
        if(debug){
            console.log(`comprobarAlias => ${alias}`);
        }
        leerCookie(alias);
    });
};

let cargarFechas =(inferior, superior) =>{
    let fechaNacimiento = document.getElementById('slNacimiento');

    for(let i=inferior; i<=superior; i++){
        let opcion = document.createElement("option");
        opcion.setAttribute(`value`,`${i}`);
        opcion.textContent = i;
        fechaNacimiento.appendChild(opcion);

    }
};

let guardarDatos = () =>{
    let nombre = document.getElementById('txtNombre').value;
    let alias = document.getElementById('txtAlias').value;

    let contrasenia = document.getElementById('pwContrasenia').value;
    //let reContrasenia = document.getElementById('pwReContrasenia').value;
    let nacimiento = document.getElementById('slNacimiento').value;
    let textoCookie = "";
    //let almacenamiento;

    textoCookie = `${nombre}#${contrasenia}#${nacimiento}#`;
    let tamanioCookie = textoCookie.length-1;
    if(debug){
        console.log(tamanioCookie);
        console.log(textoCookie);
    }
    localStorage.setItem(alias, textoCookie);
};

let leerCookie = (alias) =>{
    let cogerCookie = localStorage.getItem(alias);
    let contenidoCookie = cogerCookie.split("#");
    let nombre = contenidoCookie[0];
    if(debug){
        console.log(`ContenidoCookie => ${contenidoCookie}`);
        console.log(`alias => ${alias}, nombre => ${nombre}`);
    }
};

window.addEventListener("DOMContentLoaded", iniciar);