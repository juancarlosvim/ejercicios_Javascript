
vidas =7;
fallos = 0;
var ruta = "img/" //ruta generica
var debug = true // para imprimir en consola
var palabraAleatoriaGenerada = generarPalabaAleatoria();
window.onload = function(){



    var arrayImagenes = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"];



    rellenarPalabra(palabraAleatoriaGenerada);
    colocarImagen();
    accionBotones();


    var ponerVidas = document.getElementById('vidas');
    ponerVidas.textContent="Número de vidas: "+vidas;
}



//funcion que devuelve un una palabra aleatoria en el array
function generarPalabaAleatoria(){
    var arrayDePalabras = ["javascript", "ajax", "html", "css", "programacion"];
   var palabraAleatoria = Math.floor(Math.random()*arrayDePalabras.length);
   return arrayDePalabras[palabraAleatoria].toUpperCase();
}
/* funcion cogerBotones */
function  accionBotones() {
    var cogerBotones = document.getElementsByTagName('button');
    var longitudBotones = cogerBotones.length;
    for (i = 0; i < longitudBotones; i++) {
        cogerBotones[i].addEventListener("click", botonesValor);

    }

}
/* funcion que da el valor cuando haces click en el boton coge el valor del botón y comprueba que esté con la palabra generada */

function botonesValor(e) {
    var letra = e.target.value
    var palabraAleatoria = palabraAleatoriaGenerada;
    var posicion = palabraAleatoria.indexOf(letra);
    var posiciones = [];

    if(debug){
        console.log(letra);
        console.log(palabraAleatoria);
        console.log(posicion);
    }
    while(posicion != -1){
        posiciones.push(posicion)
        var posicion = palabraAleatoria.indexOf(letra, posicion+1);
        if(debug){
            console.log(posicion);
        }
    }

    comprobarPalabra(letra, palabraAleatoria);
}

/* funcion para comprobarLaletra que recibe la letra y la palabraAleatoria */
function comprobarPalabra(l, p) {
    var letra = l;
    var palaAl = p;
    var pPintar = document.getElementById('palabraGenerada');
    for(i=0, fin=palaAl.length;i<fin;i++){
        if(letra == palaAl.charAt(i)){

            pPintar.textContent = pPintar.textContent.substring(0,i)+letra+pPintar.textContent.substring(i+1, pPintar.textContent.length);
            if(debug){
                console.log(pPintar);
                console.log(palaAl.length)
                //console.log(letra);
                //console.log(palaAl.charAt(i));

            }

        }

    }

}



/* funcion relllenar palabra _ _ _ */
function rellenarPalabra(palabra) {

    var cogerPalabra = document.getElementById('palabraGenerada');
    for(i=0, fin=palabra.length; i<fin;i++){
        cogerPalabra.innerHTML +="=";
    }

}


// muestro la presentacion del juego
function colocarImagen(){
    var cogerImagen = document.getElementsByTagName('img')[0];
    
    cogerImagen.src= ruta+""+fallos+".png";
    

    
}
// funcion que le entra el numero de vidas y lo actualiza
function actualizarVidas(vidas) {
    var ponerVidas = document.getElementById('vidas');
    ponerVidas.textContent="Número de vidas: "+vidas;

}

function cambiarImagen(fallos) {
    var cogerImagen = document.getElementsByTagName('img')[0];
    cogerImagen.src= ruta+""+fallos+".png";
}
